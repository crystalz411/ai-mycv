import React from "react";
// import logo from '../logo.svg';
import axios from "axios";

interface HeaderProps {
  token: () => void;
}

function Header(props: HeaderProps): JSX.Element {
  function logMeOut(): void {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5095/logout",
    })
      .then((response) => {
        console.log("response", response);
        props.token();
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
    <header className="App-header">
      <div className="flex min-h-screen flex-col">
        <header className="container sticky top-0 z-40 bg-background">
          <div className="flex h-20 items-center justify-between py-6">
            <h1>SnapCV</h1>
            <nav>
              <button onClick={logMeOut}>Logout</button>
            </nav>
          </div>
        </header>
        {/* <main className="flex-1">{children}</main> */}
        {/* <SiteFooter /> */}
      </div>
    </header>
  );
}

export default Header;
