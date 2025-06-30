import React from "react";
import { useNavigate } from "react-router-dom";

const NewTicketButton = ({ resetForm }) => {
  const navigate = useNavigate();

  const handleNewTicket = () => {
    if (resetForm) resetForm(); 
    navigate("/ticket"); 
  };

  return (
    <button
      className="cursor-pointer w-full md-max-w-[266px] h-[48px] border border-[rgb(36,160,181)] hover:bg-[rgb(36,160,181)] hover:text-white rounded-[8px] text-[16px] text-[rgb(36,160,181)] font-serif"
      onClick={handleNewTicket}
      type="button"
    >
      Book Another Ticket
    </button>
  );
};

export default NewTicketButton;
