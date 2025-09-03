import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  
  const registerButton = () => {
    navigate("/ticket");
  };
  return (
    <>
    <div className="bg-cover md:bg-center w-full min-h-screen place-content-center" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
       <div className="flex flex-col items-center gap-y-[8px] md:gap-y-[2px] md:pl-[230px]">
       <h1 className="font-monoton text-[51px] md:text-[62px] text-[rgb(250,250,250)] text-center leading-[140%]">
          TECHEMBER FEST{" "}
          <span className="font-orbitron text-[50px] text-center md:text-[62px]">
            ”25
          </span>
        </h1>
        
        <p className="font-Road text-[36px] md:text-[46px] text-[rgb(250,250,250)] text-center leading-[100%]">
          Code! Create!! Conquer!!!
        </p>
        
        <p className="font-Road text-[30px] md:text-[40px] text-[rgb(250,250,250)] text-center leading-[150%]">
          Join us for an unforgettable experience!
        </p>
        
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] md:gap-[8px] pt-[20px] px-4 md:pl-[260px] ">
        <p className="font-mochi text-[22px] md:text-[24px] text-[rgb(250,250,250)] text-center">
          Grab Your Tickets Here
        </p>

        <button
          className="cursor-pointer w-full max-w-[100px] md:max-w-[150px] min-h-[44px] md:min-h-[48px] border border-[rgb(36,160,181)] bg-white hover:bg-[rgb(1,29,34)] hover:text-white active:bg-[(1,29,34)] active:text-white rounded-[8px] text-[rgb(36,160,181)]"
          onClick={registerButton}
          type="button"
        >
          <i className="fa-solid fa-angle-right text-[20x] md:text-[24px] "></i>
        </button>
      </div>
      </div>
    </>
  );
};

export default HomePage;
