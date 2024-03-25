import React, { FC, useRef } from "react";
import CoverLetterImg from "../../images/cover-letter-main.webp";
import ResumeImg from "../../images/resume-main.webp";
import InterviewImg from "../../images/interview-buddy-main.webp";

const FeatureDetails = () => {
  return (
    <div className=" text-white p-4 md:p-8">
      <div className="animate-slidein opacity-0 [--slidein-delay:300ms] ...">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          You are 80% more likely to get hired if you use SnapCV
        </h1>
        <p className="mb-8">
          We specialize in providing advanced AI tools tailored for job seekers
        </p>
      </div>

      <div className="animate-slidein opacity-0 [--slidein-delay:500ms] ...">
        <div
          id="cover-letter"
          className="flex flex-col md:flex-row justify-between items-start gap-8 py-24"
        >
          {/* Left Panel */}
          <img className=" lg:w-2/4" src={CoverLetterImg} />

          {/* Right Panel */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">AI COVER LETTER</h2>
            <p className="mb-4">
              Cover letters are boring and most tools generate poorly written
              ones. Our AI will generate a job specific cover letter for you in
              seconds using advanced AI models.
            </p>
            <ul className="flex flex-col items-center mb-4">
              <li className="flex items-center gap-5 mb-5">
                <svg
                  className=" w-5 text-green-600"
                  width="20%"
                  height="20%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                AI Trained on 1000s of cover letters
              </li>
              <li className="flex items-center gap-5 mb-5">
                <svg
                  className=" w-5 text-green-600"
                  width="20%"
                  height="20%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Customizable tone
              </li>
              <li className="flex items-center gap-5 mb-5">
                <svg
                  className=" w-5 text-green-600"
                  width="20%"
                  height="20%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Easily export to PDF
              </li>
            </ul>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Start Now →
            </button>
          </div>
        </div>
      </div>

      {/* Resume section ------------------------------> */}
      <div className="animate-slidein opacity-0 [--slidein-delay:600ms] ...">
        <div
          id="resume"
          className="flex flex-col md:flex-row justify-between items-start gap-8 py-24"
        >
          {/* Left Panel */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">AI RESUME BUILDER</h2>
            <p className="mb-4">
              The quickest and most efficient way to create a resume, upload an
              existing one or provide your desired job title and our AI will
              generate the first draft for you in seconds.
            </p>
            <ul className="flex flex-col items-center mb-4">
              <li className="flex items-center gap-5 mb-5">
                <svg
                  className=" w-5 text-green-600"
                  width="20%"
                  height="20%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Produces unlimited tailored CVs{" "}
              </li>
              <li className="flex items-center gap-5 mb-5">
                <svg
                  className=" w-5 text-green-600"
                  width="20%"
                  height="20%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Shows gaps on CV compared to Job
              </li>
              <li className="flex items-center gap-5 mb-5">
                <svg
                  className=" w-5 text-green-600"
                  width="20%"
                  height="20%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Highlights areas for improvement
              </li>
            </ul>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Start Now →
            </button>
          </div>

          {/* Right Panel */}
          <img className=" lg:w-2/4" src={ResumeImg} />
        </div>
      </div>

      {/* interview section --------------------> */}
      <div className="animate-slidein opacity-0 [--slidein-delay:700ms] ...">
        <div
          id="interview-buddy"
          className="flex flex-col md:flex-row justify-between items-start gap-8 py-24"
        >
          {/* Left Panel */}
          <img className=" lg:w-2/4" src={InterviewImg} />

          {/* Right Panel */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">AI INTERVIEW BUDDY</h2>
            <p className="mb-4">
              Generate the perfect personalised answer to any interview
              question. Be prepared for whichever question you get asked.
            </p>
            <ul className="flex flex-col items-center mb-4">
              <li className="flex items-center gap-5 mb-5">
                <svg
                  className=" w-5 text-green-600"
                  width="20%"
                  height="20%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Custom Questions based on Resume
              </li>
              <li className="flex items-center gap-5 mb-5">
                <svg
                  className=" w-5 text-green-600"
                  width="20%"
                  height="20%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                AI Generated Questions & Answers based on Job
              </li>
              <li className="flex items-center gap-5 mb-5">
                <svg
                  className=" w-5 text-green-600"
                  width="20%"
                  height="20%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {`Real Voice interview( coming soon!)`}
              </li>
            </ul>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Start Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
