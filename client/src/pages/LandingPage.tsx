import React          from "react";
import './style.css'
import LandingNavComp from "../components/LandingNavComp";
import ButtonUI       from "../components/UI/ButtonUI";


const LandingPage:React.FC = () => {
  return (
    <div className="containerLanding text-white ">
      <div className="flex flex-col  h-full py-20">
        <div className="flex justify-between items-center px-[280px]">
          <LandingNavComp />
        </div>
        <div className=" flex flex-col items-center justify-center space-y-3 ">
          <h1 className="text-text text-6xl font-bold">WE ARE COMMUNITY</h1>

          <h2 className="max-w-xl text-center text-l-text ">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </h2>
          <ButtonUI buttonName="signin" link='login'/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage