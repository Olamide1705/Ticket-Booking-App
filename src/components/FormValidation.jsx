import React, { useState, useEffect } from "react"
import GoBackButton from "./GoBackButton";
import ImageUploader from "../components/ImageUploader";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const FormValidation = ({
  formData,
  setFormData,
  selectedTicket,
  ticketCount,
  passportImage,
  setPassportImage,
}) => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Please input your name!";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (
      !passportImage ||
      typeof passportImage !== "string" ||
      passportImage.trim() === ""
    ) {
      errors.passportImage = "A passport photograph is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (value.trim()) {
        delete updatedErrors[name];
      }
      if (name === "email" && /^\S+@\S+\.\S+$/.test(value)) {
        delete updatedErrors.email;
      }
      return updatedErrors;
    });
  };

  useEffect(() => {
    if (
      passportImage &&
      typeof passportImage === "string" &&
      passportImage.trim() !== ""
    ) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors.passportImage;
        return newErrors;
      });
    }
  }, [passportImage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    setIsLoading(true);

    const ticketId = `TICKET-${Date.now()}`;

    try {
      const ticketData = {
        ticketId,
        formData,
        selectedTicket,
        ticketCount,
        passportImage,
        createdAt: new Date(),
      };
      await addDoc(collection(db, "tickets"), ticketData);
      navigate("/confirmation", {
        state: {
          formData,
          passportImage,
          selectedTicket,
          ticketCount,
          ticketId,
        },
      });
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-[556px] md:min-h-[328px] bg-[rgb(5,34,40)] border border-[rgb(7,55,63)] rounded-[24px] p-6 mb-8">
        <p className="font-Roboto text-[16px] text-white pb-[20px] md:pb-[35px] ">
          Upload Profile Picture
        </p>
        <div className="md:relative flex items-center justify-center rounded-[20px] md:rounded-none w-full min-h-[260px] md:min-h-[200px] bg-[rgba(0,0,0,0.2)]">
          <ImageUploader
            passportImage={passportImage}
            setPassportImage={setPassportImage}
            passportError={errors.passportImage}
          />
        </div>
      </div>

      <div className="bg-[rgb(7,55,63)] h-1 w-full rounded mb-[40px]"></div>

      <form className="space-y-[25px] md:space-y-[30px] " onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label className="text-[16px] font-Roboto text-white">
            * Enter your name:
          </label>
          <input
            className={`text-white focus:outline-none focus:ring-2 focus:ring-[rgb(7,55,63)] border ${
              errors.name ? "border-red-500" : "border-[rgb(7,55,63)]"
            } w-full max-w-[556px] h-[48px] p-[8px] md:p-[12px] mt-[5px] rounded-[12px]`}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-[12px] h-[16px] mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-[16px] font-Roboto text-white">
            * Enter your email:
          </label>
          <div
            className={`flex items-center gap-[10px] w-full max-w-[556px] h-[48px] pl-[10px] py-[12px] mt-[5px] rounded-[12px] text-white focus:outline-none focus:ring-2 focus:ring-[rgb(7,55,63)] 
              ${errors.email ? "border-red-500" : "border-[rgb(7,55,63)]"} border`}
          >
            <i
              className={`fa-regular fa-envelope pointer-events-none w-5 h-5 pt-[2px] pl-[2px] ${
                errors.email ? "text-red-500" : "text-white"
              }`}
            ></i>

            <input
              className="w-full max-w-[280px] md:max-w-[500px] pl-[10px] h-[30px] border-none bg-white text-black focus:outline-none focus:ring-2 focus:ring-[rgb(7,55,63)]"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-[12px] h-[16px] mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="message"
            className="text-[16px] font-Roboto text-white"
          >
            Special Request?
          </label>
          <textarea
            className="border-[rgb(7,55,63)] text-white focus:outline-none focus:ring-2 focus:ring-[rgb(7,55,63)] border w-full max-w-[556px] h-[127px] p-[12px] mt-[5px] rounded-[12px]"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-[20px]">
          <GoBackButton />
          <button
            className="cursor-pointer w-full md-max-w-[266px] h-[48px] bg-[rgb(36,160,181)] hover:bg-[rgb(14,70,79)] hover:text-[rgb(36,160,181)] hover:border-1 hover:border-[rgb(36,160,181)] rounded-[8px] text-[16px] text-[rgb(255,255,255)] font-serif "
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="pl-[12px]">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              </div>
            ) : (
              "Get My Free Ticket"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormValidation;
