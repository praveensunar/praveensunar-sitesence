import React from "react";
import Team1 from "../Images/Team1.jpg";

const TeamSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center px-6 py-10 bg-white text-black">
      
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 p-6 md:p-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 font-bold text-center md:text-left">
          The Team You Need To Succeed
        </h2>
        <p className="text-lg text-center md:text-left leading-relaxed">
          Driven by passion and a dedication to our clients, our team of 100+ digital experts delivers 
          impactful results for both small businesses and Fortune 500 companies.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img 
          src={Team1} 
          alt="Team" 
          className="w-full sm:w-4/5 md:w-full h-auto rounded-lg shadow-lg"
        />
      </div>

    </div>
  );
};

export default TeamSection;
