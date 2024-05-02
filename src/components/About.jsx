import { about_us } from "../constants";
import styles from "../style";
import AboutCard from "./AboutCard";

const About = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        About Us
      </h2>
      <div className="w-full md:mt-20 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        We're a young and energetic team from  <span className="font-poppins font-normal text-[18px] leading-[32.4px] text-white">Luxembourg</span>. We love what we do and are happy to travel to provide our drone services. Wherever you are, we're here to help capture great visuals for you.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {about_us.map((card) => <AboutCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default About;
