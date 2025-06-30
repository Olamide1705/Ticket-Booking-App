import React from 'react'
import { useNavigate } from "react-router-dom"


const NextButton = ({ selectedTicket, setNoOptionSelected }) => {
    const navigate = useNavigate();

    const handleNext = () => {
    if (!selectedTicket) {
      setNoOptionSelected(true);
      return;
 }
    setNoOptionSelected(false);
    console.log("Form Submitted with Ticket:", selectedTicket);
      navigate("/form");
  };

  return (
    <button
              className="cursor-pointer w-full md-max-w-[266px] h-[48px] bg-[rgb(36,160,181)] hover:bg-[rgb(14,70,79)] hover:text-[rgb(36,160,181)] hover:border-1 hover:border-[rgb(36,160,181)] rounded-[8px] text-[16px] text-[rgb(255,255,255)] font-serif "
              onClick={handleNext}
              type="button"
            >
              Next
    </button>
  )
}

export default NextButton