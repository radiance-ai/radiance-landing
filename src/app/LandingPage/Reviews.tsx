"use client";
import React from "react";

const Reviews = () => {
  return (
    <div
    // @ts-ignore
      name="Reviews"
      className="h-full lg:h-screen w-full bg-slate-300 mx-auto py-20 overflow-hidden"
    >
      <div className="flex justify-start items-start m-auto p-12">
        <h1 className="text-blue-800 left-10 text-7xl">Reviews</h1>
      </div>
      <div className="h-auto  grid lg:grid-cols-3 gap-4 m-4 w-auto">
        <div className="border-black border-solid border-2 self-center w-full h-full text-center relative rounded-3xl">
        <div className="absolute  left-20 w-96 h-96 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <h3 className="text-lg font-semibold text-black p-10">
            Very easy this was to integrate
          </h3>
          <p className="p-10">
            "Due to the price and the seasonal nature of our products, location
            shootings are typically not an option for us. We've completely
            transformed the game thanks to Radiance AI. We are able to produce
            stunning lifestyle photographs in settings where we would never be
            able to shoot, as opposed to relying solely on standard studio
            shots!"
          </p>
          <div className="flex items-center justify-center space-x-3 p-10">
            {/* <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile"
            /> */}
            <img
              src="https://media.licdn.com/dms/image/D560BAQE2TwMhuKwwfQ/company-logo_200_200/0/1682286861308?e=2147483647&v=beta&t=x7YCabilgsMCrSMKPCZAb39fGChNmVC2IiIpdh3LBXY"
              className="rounded-full w-9 h-9"
              alt="Radiance AI Logo"
            />
            <div className="space-y-0.5 font-medium text-gray-900 text-left">
              <div>Vishal</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Developer at Radiance AI
              </div>
            </div>
          </div>
        </div>
        <div className="border-black border-solid border-2 self-center w-full h-full text-center relative rounded-3xl">
        <div className="absolute left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
          <h3 className="text-lg font-semibold text-black p-10">
            Very easy this was to integrate
          </h3>
          <p className="p-10">
            "Due to the price and the seasonal nature of our products, location
            shootings are typically not an option for us. We've completely
            transformed the game thanks to Radiance AI. We are able to produce
            stunning lifestyle photographs in settings where we would never be
            able to shoot, as opposed to relying solely on standard studio
            shots!"
          </p>
          <div className="flex items-center justify-center space-x-3 p-10">
          <img
              src="https://media.licdn.com/dms/image/D560BAQE2TwMhuKwwfQ/company-logo_200_200/0/1682286861308?e=2147483647&v=beta&t=x7YCabilgsMCrSMKPCZAb39fGChNmVC2IiIpdh3LBXY"
              className="rounded-full w-9 h-9"
              alt="Radiance AI Logo"
            />
            <div className="space-y-0.5 font-medium text-gray-900 text-left">
              <div>Sravan</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Developer at Radiance AI
              </div>
            </div>
          </div>
        </div>
        <div className="border-black border-solid border-2 self-center w-full h-full text-center relative rounded-3xl">
        <div className="absolute  left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
          <h3 className="text-lg font-semibold text-black p-10">
            Very easy this was to integrate
          </h3>
          <p className="p-10">
            "Due to the price and the seasonal nature of our products, location
            shootings are typically not an option for us. We've completely
            transformed the game thanks to Radiance AI. We are able to produce
            stunning lifestyle photographs in settings where we would never be
            able to shoot, as opposed to relying solely on standard studio
            shots!"
          </p>
          <div className="flex items-center justify-center space-x-3 p-10">
          <img
              src="https://media.licdn.com/dms/image/D560BAQE2TwMhuKwwfQ/company-logo_200_200/0/1682286861308?e=2147483647&v=beta&t=x7YCabilgsMCrSMKPCZAb39fGChNmVC2IiIpdh3LBXY"
              className="rounded-full w-9 h-9"
              alt="Radiance AI Logo"
            />
            <div className="space-y-0.5 font-medium text-gray-900 text-left">
              <div>Prudhvi</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Developer at Radinace AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
