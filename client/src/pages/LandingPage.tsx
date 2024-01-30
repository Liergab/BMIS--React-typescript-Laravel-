import React          from "react";
import './style.css'
import LandingNavComp from "../components/LandingNavComp";
import ButtonUI       from "../components/UI/ButtonUI";



const LandingPage:React.FC = () => {

  return (
    <div className="relative w-full h-full text-white bg-image">
      <div className="flex flex-col  h-full py-[80px] md:py-[50px] gap-10 md:gap-0">
        <div className="flex justify-between items-center px-[20px] md:px-[280px]">
          <LandingNavComp  />
        </div>
        <div className=" flex flex-col items-center justify-center space-y-4 md:space-y-3 ">
          <h1 className="text-text text-2xl md:text-6xl font-bold">WE ARE COMMUNITY</h1>

          <h2 className=" max-w-56 md:max-w-xl text-center text-xs md:text-lg text-l-text ">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </h2>
          <ButtonUI buttonName="signin" link='login'/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage