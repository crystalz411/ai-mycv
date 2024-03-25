"use client";

import React from "react";
import { Link } from "react-router-dom";
import BloomGirl from "@/app/bloom-girl-meditating-in-the-lotus-position.gif";
import LookingImg from "@/app/juicy-woman-is-looking-for-perfect-candidate.gif";
import Arrow from "@/app/down-arrow.png";
import { TypeAnimation } from "react-type-animation";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Features from "../Features";
import HiringBanner from "../../UIcomponts/HiringBanner";
import Avatars from "../../UIcomponts/Avatars";
import FeatureDetails from "../FeatureDetails";

export default function LandingPage() {


  return (
    <div className="mx-auto max-w-screen-xl px-8 xl:px-16" id="about">
      <div>
        <div className="grid grid-flow-row pt-10 pb-5 sm:grid-flow-col sm:pt-16 md:grid-rows-1">
          <div className="items-center text-center row-start-2 flex flex-col justify-center sm:row-start-1">
          <div className="animate-slidein opacity-0 [--slidein-delay:300ms] ...">
            <motion.h1 className="text-white font-bold text-3xl leading-normal sm:text-5xl lg:text-6xl xl:text-7xl">
              Unlock your dream job with the power of{" "}
              <strong className="text-purple-500">
                AI
              </strong>
            </motion.h1>
            </div>

            <div className="animate-slidein opacity-0 [--slidein-delay:500ms] ...">              
            <motion.p className="text-white font-medium mt-9 h-16">
              We are{" "}
              <strong className="text-white font-extrabold">Career Guru</strong>{" "}
              your personal carrer assitant. <br/> Land your dream job, using the
              power of AI to{" "}
              <TypeAnimation
                sequence={[
                  "re-write your Resume",
                  1000,
                  "re-write your Cover Letter",
                  1000,
                  "Help Interview Prep",
                  1000,
                ]}
                wrapper="div"
                speed={30}
                className="text-purple-500"
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </motion.p>
            </div>

            <div className="animate-slidein opacity-0 [--slidein-delay:700ms] ...">
            <button className="ml-0 mt-16 inline-flex items-center justify-center rounded-lg bg-purple-500 px-5 py-5 text-center text-base font-medium text-white hover:bg-purple-400 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-purple-700" >
              Start Now For Free
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
            <Avatars/>
          </div>
        </div>
      </div>      
      <Features/>
      <HiringBanner/>
      <FeatureDetails />
    </div>
  );
}
