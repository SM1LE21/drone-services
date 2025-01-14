import { services_2 } from "../constants";
import styles, { layout } from "../style";
import { GetStartedButtonEstate } from "./Button";
import { useTranslation } from 'react-i18next';

const FeatureCard = ({ number, featureKey, index }) => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== services_2.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <p className="text-secondary font-bold text-[20px]">{number}</p>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {t(`services2.features.${featureKey}.title`)}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {t(`services2.features.${featureKey}.description`)}
        </p>
      </div>
    </div>
  );
};

const Services2 = () => {
  const { t } = useTranslation();

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {t('services2.title')}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('services2.description')}
        </p>

        <GetStartedButtonEstate styles={`mt-10`} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {services_2.map((service, index) => (
          <FeatureCard 
            key={service.id} 
            number={index + 4} // Hardcoded as 1, 2, 3 for Basic, Standard, Premium
            featureKey={`feature${index + 1}`} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Services2;
