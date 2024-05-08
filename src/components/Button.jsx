import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import FormModal from "./FormModal";

export const defaultButton = ({ styles }) => {
  const { t } = useTranslation();

  return (
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      {t('buttons.getStarted')}
    </button>
  );
};

export const CustomRequestButton = ({ styles }) => {
  const [showForm, setShowForm] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} onClick={() => setShowForm(true)}>
        {t('buttons.customRequest')}
      </button>
      {showForm && <FormModal onClose={() => setShowForm(false)} formType="custom" />}
    </>
  );
};

export const GetStartedButtonEvent = ({ styles }) => {
  const [showForm, setShowForm] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} onClick={() => setShowForm(true)}>
        {t('buttons.getStarted')}
      </button>
      {showForm && <FormModal onClose={() => setShowForm(false)} formType="event" />}
    </>
  );
};

export const GetStartedButtonEstate = ({ styles }) => {
  const [showForm, setShowForm] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} onClick={() => setShowForm(true)}>
        {t('buttons.getStarted')}
      </button>
      {showForm && <FormModal onClose={() => setShowForm(false)} formType="realEstate" />}
    </>
  );
};
