import React, { useState } from "react";
import location from "../assets/locaton.png";
import Text from "../assets/Text.png";
import TicketSelector from "../components/TicketSelector";
import NavBar from './../components/NavBar';
import CancelButton from "../components/CancelButton";
import NextButton from "../components/NextButton";

const TicketSelection = ({ selectedTicket, setSelectedTicket, ticketCount, setTicketCount }) => {
  const [noOptionSelected, setNoOptionSelected] = useState(false);
      
   
  return (
    <>
    <div className="bg-[rgba(2,25,29,1)]">
      <NavBar />
      <div className="bg-[rgb(4,30,35)] border border-[rgb(14,70,79)] rounded-[40px] h-full w-full max-w-[700px] mx-auto md:p-12 p-6 gap-8">
        <div className="flex items-center justify-between py-2">
          <h1 className="font-serif text-[white] text-[24px] md:text-[32px] ">
            Ticket Selection
          </h1>
          <p className="font-serif text-[14px] md:text-[16px] text-[white]">Step 1/3</p>
        </div>
        <div className="flex h-1 mb-8 w-full">
          <div className="bg-[rgb(36,160,181)] w-1/3"></div>
          <div className="bg-[rgb(14,70,79)] flex-1"></div>
        </div>

        <div className="bg-[rgb(8,37,43)] border border-[rgb(14,70,79)] rounded-[32px] p-4 md:p-6 space-y-6">
          <div className="bg-radial from-[rgba(10,12,17,0.1)] via-[rgba(36,160,181,0.2)] to-[rgba(36,160,181,0)] border border-[rgba(7,55,63,1)] rounded-[24px] bg-opacity-50 p-[24px]">
            <div className="flex flex-col items-center justify-center space-y-2 pb-[10px]">
              <h1 className="font-Road text-[45px] text-center md:text-[62px] w-[246px] md:w-auto text-[rgb(250,250,250)] leading-none">
                Techember Fest ”25
              </h1>
              <p className="font-Roboto text-[14px] md:text-[16px] text-[rgb(250,250,250)] max-w-[460px] text-center">
                Join us for an unforgettable experience at Techember Fest ”25! Secure
                your spot now.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-[16px] ">
              <div className="flex items-center gap-[5px]">
              <div className="flex items-center ">
                <img src={location} alt="" className="w-[30px] h-[30px]"/>
              </div>
              <p className="font-Roboto text-[rgb(250,250,250)] text-[14px] md:text-[16px] text-center ">
                Ewenla Oshodi, Lagos Nigeria
              </p>
              </div>
              <div className="hidden md:block">
                <img src={Text} alt="" />
              </div>
              <div >
                <p className="font-Roboto text-[rgb(250,250,250)] text-[14px] md:text-[16px] text-center leading-[20%]">
                  July 01, 2025 | 7:00PM
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[rgb(7,55,63)] w-full h-[4px] "></div>

          <TicketSelector
            selectedTicket={selectedTicket}
            onSelect={(value) => {
              setSelectedTicket(value);
              setNoOptionSelected(false);
            }}
            noOptionSelected={noOptionSelected}
          />

          <div>
            <label
              htmlFor="ticketCount"
              className="text-[14px] md:text-[16px] text-[rgb(250,250,250)] font-Roboto"
            >
              Number of Tickets
            </label>
            <select
              id="ticketCount"
              name="ticketCount"
              value={ticketCount}
              onChange={(e) => setTicketCount(Number(e.target.value))}
              className="focus:outline-none focus:ring-2 focus:ring-[rgb(7,55,63)] bg-[rgb(8,37,43)] text-white w-full h-[48px] border border-[rgb(7,55,63)] rounded-[12px] px-[12px] text-[16px] text-[rgb(255,255,255)] font-Roboto mt-[10px]"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5">
            
            <CancelButton 
            setSelectedTicket={setSelectedTicket}
            setTicketCount={setTicketCount}
            setNoOptionSelected={setNoOptionSelected}
            />

            <NextButton
            selectedTicket={selectedTicket}
            setNoOptionSelected={setNoOptionSelected}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default TicketSelection;
