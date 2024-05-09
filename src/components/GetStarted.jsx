import React, { useState } from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import FormModal from "./FormModal";
import { useTranslation } from 'react-i18next'; 

const GetStarted = () => {
  const [showForm, setShowForm] = useState(false);
  const { t } = useTranslation(); 

  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`} onClick={() => setShowForm(true)}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">{t('getStarted.firstLine')}</span> {/* Use t function */}
          </p>
          <img src={arrowUp} alt={t('getStarted.arrowAlt')} className="w-[23px] h-[23px] object-contain" /> {/* Use t function */}
        </div>
        
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">{t('getStarted.secondLine')}</span> {/* Use t function */}
        </p>
      </div>
      {showForm && <FormModal onClose={() => setShowForm(false)} formType="custom" />}
    </div>
  );
};

export default GetStarted;
