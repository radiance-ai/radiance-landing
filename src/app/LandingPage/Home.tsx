"use client";
import React from "react";
// import pinkpurse from "./assets/pinkpurse.jpg";

const Home = () => {
  return (
    <section
    // @ts-ignore
      name="Home"
      className="p-7 h-screen flex bg-slate-300 max-w-screen overflow-hidden"
    >
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="relative place-self-center mr-auto lg:col-span-7 max-w-screen">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-black">
            Create product visuals lightning fast
          </h1>
          <p className="mb-6 max-w-2xl font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-800">
            Build AI-powered realistic product visualsGenerate brand
            personalised product visuals by simply specifying your desired shots
            and uploading sample product images.
          </p>
          <a
            href="/login"
            className="inline-flex bg-blue-500 justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex mx-5">
          <img src="/mockups/pinkpurse.jpg" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Home;
