import React from "react";
import axios from "axios";

// interface HeaderProps {
//   token: () => void;
// }

function NewNavBar(): JSX.Element {
  // function logMeOut(): void {
  //     axios({
  //       method: "POST",
  //       url: "http://127.0.0.1:5095/logout",
  //     })
  //       .then((response) => {
  //         console.log("response", response);
  //         props.token();
  //       })
  //       .catch((error) => {
  //         if (error.response) {
  //           console.log(error.response);
  //           console.log(error.response.status);
  //           console.log(error.response.headers);
  //         }
  //       });
  //   }

  return (
    <div>
      <nav className=" mt-5 text-white flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <a 
          href="/" className="text-white font-bold text-3xl leading-normal ml-5">
            SNAPCV
          </a>
          {/* <a href="/application-kit" className="hover:underline">Application Kit</a>
        <a href="/ai-job-interview" className="hover:underline">AI Job Interview</a>
        <a href="/ai-resume-builder" className="hover:underline">AI Resume Builder</a> */}
          {/* <div className="relative group">
          <button className="hover:underline flex items-center">All Tools
            <svg className="fill-current h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 001.414 0L10 13.414l1.293 1.293a1 1 0 101.414-1.414l-2-2a1 1 0 00-1.414 0l-2 2a1 1 0 000 1.414z"/></svg>
          </button> */}
          {/* Dropdown menu, show/hide based on menu state. */}
          {/* Entering: "transition ease-out duration-100" */}
          {/* From: "transform opacity-0 scale-95" */}
          {/* To: "transform opacity-100 scale-100" */}
          {/* Leaving: "transition ease-in duration-75" */}
          {/* From: "transform opacity-100 scale-100" */}
          {/* To: "transform opacity-0 scale-95" */}
          {/* <div className="absolute z-10 hidden group-hover:block bg-white text-gray-700 mt-2 py-2 w-48 rounded-md shadow-lg"> */}
          {/* Dropdown items */}
          {/* </div>
        </div> */}
        </div>
        <a
          href="/sign-in"
          className="flex w-20 items-center py-2 px-4  text-white hover:text-purple-500 transition-colors duration-150"
        >
          Sign In
          <svg width="20%" height="20%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>
        </a>
      </nav>
    </div>
  );
}

export default NewNavBar;
