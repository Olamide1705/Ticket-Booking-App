import React from 'react';
import { useNavigate } from 'react-router-dom';


const GoBackButton = () => {
    const navigate = useNavigate();
    const goBack = () => {
     navigate("/ticket")
};

  return (
    <button
            className="cursor-pointer w-full max-md-w-[266px] h-[48px] border border-[rgb(36,160,181)] hover:bg-[rgb(36,160,181)] hover:text-[white] rounded-[8px] text-[16px] text-[rgb(36,160,181)] font-serif"
            onClick={goBack}
            type="button"
        >
            Back
        </button>
  )
}

export default GoBackButton