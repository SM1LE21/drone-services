import { about_us } from "../constants";
import styles from "../style";
import AboutCard from "./AboutCard";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          {t('about.title')}
        </h2>
        <div className="w-full md:mt-20 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            {t('about.description')}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {about_us.map((card) => <AboutCard key={card.id} {...card} />)}
      </div>
    </section>
  );
};

export default About;
