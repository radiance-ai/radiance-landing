"use client";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Reviews from "./Reviews";
import Workflows from './Workflows'
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import MainFeatures from "./MainFeatures";
import AllFeatures from "./AllFeatures";

const App = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Navbar />
      <HeroSection title="Create product visuals lightning fast" description="Build AI-powered realistic product visualsGenerate brand
            personalised product visuals by simply specifying your desired shots
            and uploading sample product images." />
      {/* <About />
      <Workflows /> */}
      {/* <Reviews /> */}
      <AllFeatures />
      <MainFeatures />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
