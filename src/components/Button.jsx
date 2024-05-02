import React, { useState } from "react";
import FormModal from "./FormModal";

export const defaultButton = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);


export const CustomRequestButton = ({ styles }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} onClick={() => setShowForm(true)}>
        Custom Request
      </button>
      {showForm && <FormModal onClose={() => setShowForm(false)} formType="custom" />}
    </>
  );
};

export const GetStartedButtonEvent = ({ styles }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <button  type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} onClick={() => setShowForm(true)}>
        Get Started
      </button>
      {showForm && <FormModal onClose={() => setShowForm(false)} formType="event" />}
    </>
  );
};

export const GetStartedButtonEstate = ({ styles }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <button  type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} onClick={() => setShowForm(true)}>
        Get Started
      </button>
      {showForm && <FormModal onClose={() => setShowForm(false)} formType="realEstate" />}
    </>
  );
};