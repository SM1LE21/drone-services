import React, { useState, useEffect } from 'react';
import { vid } from "../assets";
import styles, { layout } from "../style";
import { CustomRequestButton } from "./Button";

const CustomService = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = vid;
    video.muted = true; // Ensure the video is muted
    video.playsInline = true; // This should help autoplay on iOS devices

    // Use the 'canplaythrough' event to set video as loaded
    video.oncanplaythrough = () => {
      setVideoLoaded(true);
      video.oncanplaythrough = null; // Cleanup event listener after it's loaded
    };

    // Append video to the body to ensure it can start loading (off-screen)
    video.style.display = 'none'; // Hide video element
    document.body.appendChild(video);

    // Cleanup to avoid memory leaks
    return () => {
      document.body.removeChild(video);
    };
  }, []);

  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        {videoLoaded ? (
          <video src={vid} alt="billing" className="w-full h-full relative z-5" autoPlay loop muted playsInline controls={false}>
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            Loading...
          </div>
        )}
        
        <div className="absolute z-3 -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient"></div>
        <div className="absolute z-0 w-1/2 h-1/2 -left-1/2 bottom-0 rounded-full pink__gradient"></div>
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
};

export default CustomService;
