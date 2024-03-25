import json
import os
import bcrypt 
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import JWTManager, unset_jwt_cookies, create_access_token, get_jwt, get_jwt_identity, jwt_required
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


# Initialize Flask app
api = Flask(__name__)
CORS(api, supports_credentials=True, allow_headers=["Authorization", "content-type"])

# Set JWT secret key and token expiration time
api.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET')
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(api)

# Configure SQLAlchemy database
api.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('SQLALCHEMY_DATABASE_URI')
db = SQLAlchemy(api)


# Initialize the Migrate object after creating the SQLAlchemy instance
migrate = Migrate(api, db)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)
    created_date = db.Column(db.DateTime, default=datetime.utcnow)  
    token = db.Column(db.String(100))

    def __repr__(self):
        return f'<User {self.username}>'

@api.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response
    

    
# Endpoint for user registration (signup) using bcrypt for password hashing
@api.route('/signup', methods=["POST"])
def signup():

    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')


    if not username or not email or not password:
        return jsonify({'message': 'Missing username, email, or password'}), 400

    # hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    new_user = User(username=username, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()
    access_token = create_access_token(identity=email)

    return jsonify({'message': 'User created successfully', 'access_token': access_token}), 201
    

#create a route to authenticate your users and return a JWT
@api.route('/token', methods=["POST", "OPTIONS"])
def create_token():
    if request.method == 'OPTIONS':
        response = api.response_class()
        response = jsonify({"test": "test"})
        return response
    else:
        email = request.json.get("email", None)
        password = request.json.get("password", None)
        if email != email or password != password:
            return {"msg": "Wrong email or password"}, 401

        access_token = create_access_token(identity=email)
        response = {"access_token":access_token}
        return response


@api.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response


@api.route('/profile')
@jwt_required() 
def my_profile():

    data = request.json
    username = data.get('username')

    response_body = {
        "name": username,
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body


if __name__ == "__main__":
    api.run(port=5095)
    db.create_all()


