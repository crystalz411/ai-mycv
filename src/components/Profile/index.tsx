import React, { useState, MouseEvent } from 'react';
import axios from 'axios';

interface ProfileProps {
  token: string;
  setToken: (token: string) => void;
}

interface ProfileData {
  profile_name: string;
  about_me: string;
}

function Profile(props: ProfileProps): JSX.Element {

  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  console.log('token', props)


  function getData(): void {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:5095/profile',
      headers: {
        Authorization: 'Bearer ' + props.token
      }
    })
      .then((response) => {
        const res = response.data;
        res.access_token && props.setToken(res.access_token);
        setProfileData({
          profile_name: res.name,
          about_me: res.about
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  return (
    <div className="Profile">
        <h1>This is your profile</h1>
      <p>To get your profile details: </p>
      <button onClick={getData}>Click me</button>
      {profileData && (
        <div>
          <p>Profile name: {profileData.profile_name}</p>
          <p>About me: {profileData.about_me}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
