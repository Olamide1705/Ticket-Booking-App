import React from "react";
import NavBar from "./../components/NavBar";
import FormValidation from "../components/FormValidation";

const FormSection = ({
  selectedTicket,
  ticketCount,
  formData,
  setFormData,
  passportImage,
  setPassportImage,
}) => {
  return (
    <>
    <div className="bg-[rgba(2,25,29,1)]">
      <NavBar />

      <div className="bg-[rgb(4,30,35)] border border-[rgb(14,70,79)] h-full w-full max-w-[700px] mx-auto md:p-12 p-6 gap-8 rounded-[24px]">
        <div className="flex items-center justify-between">
          <h1 className="font-serif text-[white] text-[24px] md:text-[32px]">
            Attendee Details
          </h1>
          <p className="font-serif text-[14px] md:text-[16px] text-[white]">
            Step 2/3
          </p>
        </div>

        <div className="flex h-1 mb-8 w-full max-w-[800px] rounded overflow-hidden ">
          <div className="bg-[rgb(36,160,181)] flex-grow"></div>
          <div className="bg-[rgb(14,70,79)] flex-grow"></div>
        </div>

        <div className="bg-[rgb(8,37,43)] border-1 border-[rgb(14,70,79)] w-full md:w-[604px] h-full rounded-[32px] p-[24px]">
          <FormValidation
            formData={formData}
            setFormData={setFormData}
            selectedTicket={selectedTicket}
            ticketCount={ticketCount}
            passportImage={passportImage}
            setPassportImage={setPassportImage}
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default FormSection;
