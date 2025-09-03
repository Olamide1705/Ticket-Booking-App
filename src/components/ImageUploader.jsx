import React from "react";
import cloud from "../assets/cloud-download.png";
import { useDropzone } from "react-dropzone";

const ImageUploader = ({ passportImage, setPassportImage, passportError }) => {
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPassportImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <>
      <div className="flex flex-col items-center px-4 md:px-8">
        <div
          className="w-full max-w-md mx-auto cursor-pointer"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {!passportImage ? (
            <div className="flex flex-col justify-center items-center gap-[16px] border-[4px] border-[rgba(36,160,181,0.5)] p-[24px] rounded-[20px] md:absolute md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 md:left-1/2 md:rounded-[32px] w-full md:h-[250px] max-w-[250px] min-h-[230px] bg-[rgba(255,255,255,0.02)]">
              <img src={cloud} alt="Upload Passport" />
              <p className="text-[rgb(250,250,250)] text-[16px] text-center font-Roboto">
                Drag & drop or click to upload
              </p>
            </div>
          ) : (
            <img
              src={passportImage}
              alt="Uploaded passport"
              className=" border-[4px] border-[rgba(36,160,181,0.5)] p-[10px] rounded-[20px] md:rounded-[32px] w-full max-w-[230px] h-[230px] object-cover rounded-[24px]"
            />
          )}

          {passportError && (
            <p className="text-red-500 text-[12px] text-center mt-2">
              {passportError}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageUploader;
