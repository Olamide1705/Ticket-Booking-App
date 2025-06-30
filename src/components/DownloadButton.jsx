import React from "react";
import { toPng } from "html-to-image";

const DownloadButton = ({ ticketRef }) => {
  const downloadButton = () => {
    if (!ticketRef?.current) return;

    toPng(ticketRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "techember-ticket.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Error generating image:", err);
      });
  };

  return (
    <button
      className="cursor-pointer w-full md-max-w-[266px] h-[48px] bg-[rgb(36,160,181)] hover:bg-[rgb(14,70,79)] hover:text-[rgb(36,160,181)] hover:border-1 hover:border-[rgb(36,160,181)] rounded-[8px] text-[16px] text-white font-serif"
      onClick={downloadButton}
      type="button"
    >
      Download Ticket
    </button>
  );
};

export default DownloadButton;
