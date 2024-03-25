"use client";

import React, { useRef, useState } from "react";
import GradientButton from "../../UIcomponts/GradientButton";
import Avatars from "../../UIcomponts/Avatars";
import Spinner from "../../UIcomponts/Spinner";
import MagicWandIcon from "../app/magic-wand.png";
import Pdf from "../app/pdf.png";
import { callAbly } from "../../utils/call-ably";

export const metadata = {
  title: "CoverLetter",
};

export default function CoverLetter() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cvData, setCvData] = useState("");
  const [jobData, setJobData] = useState("");
  const [response, setResponseData] = useState<string>("");
  const [isOpen, setIsOpen] = useState(true); // To control the modal display
  const fileInputRef = useRef(null); // Reference to the hidden file input
  const [CVUploaded, setCVUploaded] = useState<File>();
  const [inputType, setInputType] = useState<"URL" | "Text">("Text");

  const handleClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  const handleResponeData = (data: any) => {
    const msgValue = JSON.parse(data).msg;
    console.log("msgValue", msgValue);
    setResponseData((prev) => prev + `${msgValue}`);
  };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCVUploaded(e.target.files[0]);
    }
  };;

  // const handleSubmit = () => {
  //   console.log({ jobData }, { cvData });
  //   
  //   callAbly(cvData, jobData, handleResponeData);
  // };

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleRemoveFile = () => {
    setCVUploaded(undefined);
    // Reset the file input value to allow selecting the same file again
    const fileInput = fileInputRef.current as HTMLInputElement | null;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <div className="grid grid-flow-row pt-10 sm:grid-flow-col sm:pt-16 md:grid-rows-1">
          <div className="items-center text-center row-start-2 flex flex-col justify-center sm:row-start-1">
            <div className="animate-slidein opacity-0 [--slidein-delay:300ms] ...">
              <h1 className="text-white font-bold text-3xl leading-normal sm:text-5xl lg:text-6xl xl:text-7xl">
                Unlock your dream job with the power of{" "}
                <strong className="text-purple-500">AI</strong>
              </h1>
            </div>

            <div className="animate-slidein opacity-0 [--slidein-delay:500ms] ...">
              <p className="text-white font-medium mt-9 px-5 h-16">
                We are Career Guru your personal carrer assitant. <br /> Land
                your dream job, using the power of AI to{" "}
                <strong className="text-purple-500">
                  re-write your Resume.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Avatars />
      </div>

      <div className=" my-8 md:w-2/4">
        <div className="bg-purple-500  p-1 m-5 rounded-lg text-white space-y-4">
          <div className="flex justify-between items-center mx-4 my-4">
            <div className="flex items-center">
              <span className="text-green-400">✔</span>
              <span className="ml-2 font-bold">
                {" "}
                {CVUploaded ? "Using saved CV" : "No file uploaded"}
              </span>
            </div>

            {/* bin button  */}
            <button
              className="bg-gray-800 p-1 rounded"
              onClick={handleRemoveFile}
              // disabled={!CVUploaded}
            >
              <svg
                className=" w-5"
                width="20%"
                height="20%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-purple-500 p-1 m-5 rounded-lg text-white space-y-4">
          <div className="flex justify-between ">
            <button
              className={`py-2 w-2/4 text-center font-bold m-1 px-4 rounded ${
                inputType === "URL"
                  ? "bg-gradient-to-r from-blue-950 to-gray-950"
                  : "bg-purple-500"
              }`}
              onClick={() => setInputType("URL")}
            >
              URL
            </button>
            <button
              className={`py-2 w-2/4 text-center font-bold m-1 px-4 rounded ${
                inputType === "Text"
                  ? "bg-gradient-to-r from-blue-950 to-gray-950"
                  : "bg-purple-500"
              }`}
              onClick={() => setInputType("Text")}
            >
              Text
            </button>
          </div>
        </div>

        <div className="bg-purple-500 p-1 m-5 rounded-lg text-white space-y-4">
          {inputType === "Text" ? (
            <label className="flex items-start m-4 mb-2">
              <svg
                className=" w-5"
                width="20%"
                height="20%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12M14 11H8M10 15H8M16 7H8M14.5 19L16.5 21L21 16.5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Provide the text of the job description you want to apply to
            </label>
          ) : (
            <label className="flex items-start m-4 mb-2">
              <svg
                className=" w-5"
                width="20%"
                height="20%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99999 13C10.4294 13.5741 10.9773 14.0491 11.6065 14.3929C12.2357 14.7367 12.9315 14.9411 13.6466 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9547 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.552 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.46997L11.75 5.17997M14 11C13.5705 10.4258 13.0226 9.95078 12.3934 9.60703C11.7642 9.26327 11.0685 9.05885 10.3533 9.00763C9.63819 8.95641 8.9204 9.0596 8.24864 9.31018C7.57688 9.56077 6.96687 9.9529 6.45999 10.46L3.45999 13.46C2.5492 14.403 2.04522 15.666 2.05662 16.977C2.06801 18.288 2.59385 19.542 3.52089 20.4691C4.44793 21.3961 5.702 21.9219 7.01298 21.9333C8.32396 21.9447 9.58697 21.4408 10.53 20.53L12.24 18.82"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Provide the URL of the job description you want to apply to
            </label>
          )}
          <textarea
            className=" w-11/12 p-2 rounded bg-white text-black"
            placeholder={
              inputType === "Text"
                ? "Paste your job Text here..."
                : "Paste your job URL here..."
            }
          />
        </div>
        <div>
          <GradientButton buttonText="Generate Now" />
        </div>

        <div className=" bg-white p-4 shadow-md flex-grow mt-16 mx-8 mb-4 rounded-md items-start">
          <div className="h-full block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400">
            <p className="text-2xl font-bold pt-5 pb-3">
              <span className="underline">Job Specific</span> Cover Letter
            </p>
            <div className="flex justify-center">
              <Spinner />
            </div>
          </div>
        </div>

        <div className=" bg-white p-4 shadow-md flex-grow mt-16 mx-8 mb-4 rounded-md items-start">
          <div className="h-full block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400">
            <p className="text-2xl font-bold pt-5 pb-3">
              <span className="underline">Job Specific</span> Resume
            </p>
            <div className="flex justify-center ">
              <Spinner />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white rounded-lg p-5 max-w-sm mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              First, Upload Your CV / Resume
            </h2>
            <textarea
              id="editor"
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer block w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 h-20"
              placeholder="Copy and paste your resume into the this box"
              required
              value={cvData}
              onChange={(e) => setCvData(e.target.value)}
            />
            <div className="mt-2.5 flex flex-col items-start text-sm">
              <p>or attach resume file....</p>
              <input id="file" type="file" onChange={handleFileChange} />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-700 hover:bg-purple-800"
              onClick={closeModal}
           >
              Next Step
            </button>

            <p className="mt-4 font-bold">SUPPORTED FILE TYPES: .PDF, .DOCX</p>
          </div>
        </div>
      )}
    </div>
  );
}
