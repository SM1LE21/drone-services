import React, { useState, useEffect } from 'react';
import { vid } from "../assets";
import styles, { layout } from "../style";
import { CustomRequestButton } from "./Button";
import { useTranslation } from 'react-i18next';

const CustomService = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const video = document.createElement('video');
    video.src = vid;
    video.onloadeddata = () => {
      setVideoLoaded(true);
    };
    return () => {
      video.onloadeddata = null;
    };
  }, []);

  return (
    <section id="" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        {videoLoaded ? (
          <video src={vid} alt={t('customService.videoAlt')} className="w-[100%] h-[100%] relative z-[5]" autoPlay loop muted playsInline controls={false}>
            {t('customService.videoNotSupported')}
          </video>
        ) : (
          <div className="flex justify-center items-center w-[100%] h-[100%]">
            {t('customService.loading')}
          </div>
        )}

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {t('customService.title')}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('customService.description')}
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <CustomRequestButton styles={`mt-10`} />
        </div>
      </div>
    </section>
  );
};

export default CustomService;
