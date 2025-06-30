import React from "react";

const CancelButton = ({
  setSelectedTicket,
  setTicketCount,
  setNoOptionSelected,
}) => {
  const handleCancel = () => {
    setSelectedTicket("");
    setTicketCount(1);
    setNoOptionSelected(false);
  };

  return (
    <button
      className="cursor-pointer w-full md-max-w-[266px] h-[48px] border border-[rgb(36,160,181)] hover:bg-[rgb(36,160,181)] hover:text-[white] rounded-[8px] text-[16px] text-[rgb(36,160,181)] font-serif"
      onClick={handleCancel}
      type="button"
    >
      Cancel
    </button>
  );
};

export default CancelButton;
