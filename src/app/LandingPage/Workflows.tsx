"use client";
import React from 'react'
import product_gif from './assets/product_gif.gif'

const Workflows = () => {
    return (
        // @ts-ignore
        <div name="Workflows" className='p-7 h-full lg:h-screen flex bg-slate-300 max-w-screen overflow-hidden'>
            <div className='w-full h-full justify-center items-center flex m-5 lg:scale-125 flex-col lg:flex-row'>

                <div className='w-46 h-46 lg:w-96 lg:h-96 lg:inline-block block m-5 relative'>
                    <div className="absolute w-46 h-46 lg:w-96 lg:h-96 -z-30 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 scale-125"></div>
                    <img className='w-full h-full' src="/mockups/product_gif.gif"></img>
                    <div className='h-20 z-10 text-center w-46  lg:w-96 p-3 text-white'>
                        <button className='p-4 bg-black mt-0'>Consumer Products</button>
                    </div>
                </div>

                <div className='w-46 h-46 lg:w-96 lg:h-96 lg:inline-block block m-5 relative'>
                    <div className="absolute w-46 h-46 lg:w-96 lg:h-96 -z-30 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 scale-125"></div>
                    <img className='w-full h-full' src="/mockups/product_gif.gif"></img>
                    <div className='h-20 z-10 text-center w-46  lg:w-96 p-3  text-white'>
                        <button className='p-4 w-40 h-14 bg-black mt-0'>Style Shift</button>
                    </div>
                </div>

                <div className='w-46 h-46 lg:w-96 lg:h-96 lg:inline-block block m-5 relative'>
                    <div className="absolute w-46 h-46 lg:w-96 lg:h-96 -z-30 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 scale-125"></div>
                    <img className='w-full h-full' src="/mockups/product_gif.gif"></img>
                    <div className='h-20 z-10 text-center w-46  lg:w-96 p-3  text-white'>
                        <button className='p-4 w-40 h-14 bg-black mt-0'>Model Swap</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Workflows