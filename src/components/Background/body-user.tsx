import React from "react";
import BackgroundGradientAnimation from "./body";
import './body.css'
import Footer from "../Footer/index";

const BackgroundGradientAnimationDemo = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0  items-center justify-center text-white  px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
      <Footer/>
        
      </div>
    </BackgroundGradientAnimation>
  );
}

export default BackgroundGradientAnimationDemo
