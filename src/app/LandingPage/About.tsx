"use client";
import React from "react";
// import video from "./assets/radiance.mp4";

const About = () => {
  return (
    <div
      // @ts-ignore
      name="About"
      className="h-full lg:h-screen flex bg-slate-300 max-w-full overflow-hidden"
    >
      <div className="hidden lg:flex flex-col  h-full justify-center items-center w-full overflow-hidden">
        <div className="columns-2">
          <video
            src="/mockups/radiance.mp4"
            width="750"
            height="500"
            controls
            className="self-center py-8 mx-5 brightness-75"
          ></video>
            <ul className="hidden lg:block relative py-0 h-full text-3xl sm:text-7xl font-bold text-black text-center max-w-screen">
                <li className="text-2xl p-7 pl-0 text-left mt-1">
                1. Upload sample photos of your product
                <p className="text-m opacity-50 font-medium">
                Provide 5/8 detailed product images covering different viewpoints, lights and shadows.
                </p>
                </li>
                <li className="text-2xl p-7 pl-0 text-left">
                2. Provide description outlining your ideas
                <p className="text-m opacity-50 font-medium">
                Describe the scene with backgrounds, props and features of human model. We will guide you to the best configuration for your brand.
                </p>
                </li>
                <li className="text-2xl p-7 pl-0 text-left">
                3. Start getting visuals right away
                <p className="text-m opacity-50 font-medium">
                The product visuals realising your creativity will be published in a blink of seconds.
                </p>
                </li>
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </ul>
        </div>
      </div>
      <div className="lg:hidden h-full">
      <video 
            src="/mockups/radiance.mp4"
            controls
            className="self-center  py-12 mx-5 brightness-75 max-h-full mr-4 px-4 pl-0 ml-2"
          ></video>
      </div>
    </div>
  );
};

export default About;
