import React, { useState } from 'react';
import './App.css';

import TicketSelection from './ticket/TicketSelection';
import FormSection from './ticket/FormSection';
import Confirmation from './ticket/Confirmation';
import { Routes, Route, } from 'react-router-dom';
import NoPage from './ticket/NoPage';
import HomePage from './ticket/HomePage';

function App() {
  const [selectedTicket, setSelectedTicket] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [passportImage, setPassportImage] = useState("");
  const [ticketCount, setTicketCount] = useState("1");

  return (
  
      
        <Routes>
          <Route
            path="/"
            element={
              <HomePage     
              />
            }
          />

          <Route
            path="/ticket"
            element={
              <TicketSelection
                selectedTicket={selectedTicket}
                setSelectedTicket={setSelectedTicket}
                ticketCount={ticketCount}
                setTicketCount={setTicketCount}
              />
            }
          />
          <Route
            path="/form"
            element={
              <FormSection
                selectedTicket={selectedTicket}
                formData={formData}
                setFormData={setFormData}
                passportImage={passportImage}
                setPassportImage={setPassportImage}
                 ticketCount={ticketCount}
                setTicketCount={setTicketCount}
              />
            }
          />
          <Route
            path="/confirmation"
            element={
              <Confirmation 
              selectedTicket={selectedTicket}
              setSelectedTicket={setSelectedTicket}
              ticketCount={ticketCount}
              setTicketCount={setTicketCount}
              formData={formData}
              setFormData={setFormData}
              passportImage={passportImage}
              setPassportImage={setPassportImage}   
              />
            }
          />
          <Route
          path="*"
          element={<NoPage />}
          />
        </Routes>
      
    
  );
}

export default App;
