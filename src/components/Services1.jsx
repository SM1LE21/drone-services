import { features } from "../constants";
import styles, { layout } from "../style";
import { GetStartedButtonEvent } from "./Button";

const FeatureCard = ({ price, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    <p className="text-secondary">{price} Є</p>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Services1 = () =>  (
  <section id="services" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Event Photography
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Elevate the experience of your attendees and the memory of your event with our elite drone coverage. Specializing in aerial photography for any occasion—from weddings to corporate events to sports—our drones are piloted by certified professionals who are adept at capturing unique, breathtaking perspectives that traditional photography simply cannot achieve.
      </p>

      <GetStartedButtonEvent styles={`mt-10`} />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Services1;
