import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import DownloadButton from "../components/DownloadButton";
import NewTicketButton from "../components/NewTicketButton";
import locaton from "../assets/locaton.png";
import icon from "../assets/date.png";
import Barcode from "react-barcode";

const Confirmation = ({
  ticketId,
  selectedTicket,
  setSelectedTicket,
  ticketCount,
  setTicketCount,
  formData,
  setFormData,
  passportImage,
  setPassportImage,
}) => {
  const navigate = useNavigate();
  const ticketRef = useRef(null);

  useEffect(() => {
    if (!selectedTicket || !formData.name) {
      navigate("/", { replace: true });
    }
  }, [selectedTicket, formData.name, navigate]);

  const now = new Date();
  const date = now.toLocaleDateString("en-GB");
  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDateTime = `${date}  ||  ${time}`;

  const { name = "", email = "", message = "" } = formData;

  return (
    <>
    <div className="bg-[rgba(2,25,29,1)] flex justify-center">
      <NavBar />
      <div className="bg-[rgb(4,30,35)] border border-[rgb(14,70,79)] rounded-[40px] w-full max-w-[335px] md:max-w-[700px] min-h-[1100px] p-[20px] md:p-[48px] mb-[40px]">
        <div className="flex items-center justify-between py-2">
          <h1 className="font-serif text-[white] text[24px] md-text-[32px]">
            Ready
          </h1>
          <p className="font-serif text-[14px] md:text-[16px] text-[white]">
            Step 3/3
          </p>
        </div>

        <div className="flex h-1 mb-8">
          <div className="bg-[rgb(36,160,181)] w-[800px]"></div>
          <div className="bg-[rgb(14,70,79)] w-[0px]"></div>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-[5px]">
          <h1 className="font-Roboto font-bold text-[24px] md:text-[32px] w-[287px] md:w-[604px] text-white text-center">
            Your Ticket is Booked!
          </h1>
          <p className="font-Roboto text-[14px] md:text-[16px] text-white text-center pb-[50px]">
            Check Your Email for a copy or you can download
          </p>

          <div
            ref={ticketRef}
            className="relative flex flex-col items-center justify-center"
          >
            <div
              className="flex flex-col p-[20px] w-full max-w-[300px] h-[600px] bg-no-repeat mb-[50px]"
              style={{ backgroundImage: "url('/images/Subtract.png')" }}
            >
              <div className="flex items-center justify-center w-full max-w-[260px] min-h-[446px] rounded-[16px] p-[14px] bg-[rgba(3,30,33,0.1)] border border-[rgb(36,160,181)]">
                <div className="w-full min-h-[416px]">
                  <h1 className="font-Road text-[34px] text-[rgb(250,250,250)] text-center leading-[120%]">
                    Techember Fest ”25
                  </h1>
                  <div className="flex flex-col items-center gap-y-[20px] justify-center">
                    <div className="flex flex-col items-center justify-center]">
                      <div className="flex items-center gap-x-[5px]">
                        <div>
                          <img
                            src={locaton}
                            alt="location"
                            className="w-[20px] h-[17px]"
                          />
                        </div>
                        <p className="font-Roboto text-[rgb(250,250,250)] text-[10px] text-center">
                          Ewenla Oshodi, Lagos Nigeria
                        </p>
                      </div>
                      <div className="flex items-center gap-x-[5px]">
                        <div>
                          <img
                            src={icon}
                            alt=""
                            className="w-[20px] h-[17px]"
                          />
                        </div>
                        <p className="font-Roboto text-[rgb(250,250,250)] text-[10px] text-center">
                          {formattedDateTime}
                        </p>
                      </div>
                    </div>

                    <div className="w-full max-w-[140px] min-h-[140px] rounded-[12px] border-4 border-[rgba(36,160,181,0.5)] overflow-hidden">
                      <img
                        src={passportImage}
                        alt="Passport"
                        className="w-[140px] h-[140px] object-cover rounded-[12px]"
                      />
                    </div>

                    <div className="flex flex-col items-center bg-[rgb(8,52,60)] border border-[rgb(19,61,68)] p-[4px] rounded-[8px] w-full max-w-[232px] min-h-[160px]">
                      <div className="flex">
                        <div className="w-[108px] min-h-[50px] p-[4px] border border-[rgb(18,70,78)] border-t-0 border-l-0 border-r-0 space-y-[10px]">
                          <p className="font-Roboto text-[10px] text-white font-[200]">
                            Enter your name:
                          </p>
                          <p className="font-Roboto text-[12px] text-white font-[500]">
                            {name}
                          </p>
                        </div>
                        <div className="w-[108px] min-h-[50px] p-[4px] border border-[rgb(18,70,78)] border-t-0 border-r-0 space-y-[7px]">
                          <p className="font-Roboto text-[10px] text-white font-[200]">
                            Enter your email:
                          </p>
                          <p className="font-Roboto text-[12px] text-white font-[500] break-words max-w-[94px] leading-[100%]">
                            {email}
                          </p>
                        </div>
                      </div>

                      <div className="flex ">
                        <div className="w-[108px] min-h-[42px] p-[4px] border border-[rgb(18,70,78)] border-t-0 border-r-0 border-l-0">
                          <p className="font-Roboto text-[10px] text-white font-[200]">
                            Ticket Type:
                          </p>
                          <p className="font-Roboto text-[12px] text-white font-[500]">
                            {selectedTicket}
                          </p>
                        </div>
                        <div className="w-[108px] min-h-[42px] p-[4px] border border-[rgb(18,70,78)] border-t-0 border-r-0">
                          <p className="font-Roboto text-[10px] text-white font-[200]">
                            Ticket for:
                          </p>
                          <p className="font-Roboto text-[12px] text-white font-[500]">
                            {ticketCount}
                          </p>
                        </div>
                      </div>

                      <div className="w-[224px] min-h-[60px] p-[4px] border border-[rgb(18,70,78)] border-t-0 border-r-0 border-l-0 border-b-0">
                        <p className="font-Roboto text-[9px] text-white font-[200]">
                          Special Request?
                        </p>
                        <p className="font-Roboto text-[11px] text-white font-[400]">
                          {message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-20">
              <Barcode
                className="w-full  h-[68px]"
                value={formData.name || "NoTicketId"}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-[20px]">
          <NewTicketButton
            resetForm={() => {
              setFormData({ name: "", email: "", message: "" });
              setSelectedTicket("");
              setTicketCount(1);
              setPassportImage("");
            }}
          />
          <DownloadButton ticketRef={ticketRef} />
        </div>
      </div>
      </div>
    </>
  );
};

export default Confirmation;
