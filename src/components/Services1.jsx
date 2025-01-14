import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { features } from "../constants";
import styles, { layout } from "../style";
import { GetStartedButtonEvent } from "./Button";

const FeatureCard = ({ number, featureKey, index }) => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <p className="text-secondary font-bold text-[20px]">{number}</p>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {t(`services1.features.${featureKey}.title`)}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {t(`services1.features.${featureKey}.description`)}
        </p>
      </div>
    </div>
  );
};

const Services1 = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className={layout.section}>
      <Helmet>
        <link rel="canonical" href="https://www.swiftdrones.net/#services" />
      </Helmet>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {t('services1.title')}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('services1.description')}
        </p>
        <GetStartedButtonEvent styles={`mt-10`} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard 
            key={feature.id}
            number={index + 1} // Hardcoded as 1, 2, 3 for Basic, Standard, Premium
            featureKey={`feature${index + 1}`}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Services1;
