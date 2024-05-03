import React from 'react';
import { vid } from "../assets";
import styles, { layout } from "../style";
import { CustomRequestButton } from "./Button";
import ReactPlayer from 'react-player/lazy';  // Importing ReactPlayer

const CustomService = () => (
  <section id="" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* Video player using ReactPlayer */}
      <ReactPlayer
        url={vid}
        playing={true}
        loop={true}
        muted={true}
        playsinline={true}
        width="100%"
        height="100%"
        className="relative z-5"
        controls={false}
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Custom Solutions for Your Unique Needs
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We know every project is unique. That's why we're more than willing to adapt our drone services to fit your specific needs. Get in touch to discuss your project, and let's work together to create a custom solution that suits your requirements and budget.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <CustomRequestButton styles="mt-10" />
      </div>
    </div>
  </section>
);

export default CustomService;
