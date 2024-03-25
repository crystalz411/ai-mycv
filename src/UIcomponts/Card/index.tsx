import React from "react";
import {Features} from "./features-enum";


interface CardProps {
  svgImage?: any;
  title: string;
  subtitle: string;
  buttonText?: string;
  FeatureIds: Features;
}
const Card: React.FC<CardProps> = ({
  svgImage,
  title,
  subtitle,
  buttonText,
  FeatureIds
}) => {

  const featureIdToString = (featureId: Features): string => {
    switch (featureId) {
      case Features.coverLetter:
        return 'href="/#foo"';
      case Features.resume:
        return 'resume';
      case Features.interviewBuddy:
        return 'interviewBuddy';
      default:
        return 'unknownFeature';
    }
  };

  return (
    <>
      <div className="my-4 card text-center m-auto text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
        <div className="px-8 py-10">
          <div className="flex flex-col items-center text-center">
           {svgImage ? svgImage : null}
            {/* <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div> */}
            <div className="uppercase font-bold text-xl">{title}</div>
          </div>

          <div className="text-gray-400 mt-8">
            <p>{subtitle}</p>
          </div>
          <button
          id={featureIdToString(FeatureIds)}
          className="bg-purple-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-purple-700 transition-all inline-flex items-center justify-center px-5 py-3 mt-4 ml-0 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-purple-400 bg-purple-600 "
          >
            {buttonText}
            <svg
              className="ml-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 34 18"
            >
              <path
                d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>

        <div className="h-2 w-full bg-gradient-to-l via-purple-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
        <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-purple-950 group-hover:via-purple-500 w-[70%] m-auto rounded transition-all"></div>
      </div>
    </>
  );
};
export default Card;
