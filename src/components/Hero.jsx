import React from 'react';
import { Helmet } from 'react-helmet';
import styles from "../style";
import { discount, drone } from "../assets";
import GetStarted from "./GetStarted";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <Helmet>
        <link rel="canonical" href="https://www.swiftdrones.net/" />
      </Helmet>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Can be used to display a discount tag
        
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">{t('hero.discount')}</span> {t('hero.discount_tagline')}
          </p>
        </div>
        */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            {t('hero.elevate')} <br className="sm:block hidden" />{" "}
            <span className="text-gradient">{t('hero.perspective')}</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          {t('hero.hero_subtitle')}
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('hero.hero_description')}
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={drone} alt="Drone providing aerial photography services" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
