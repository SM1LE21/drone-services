import styles from "../style";
import AboutCard from "./AboutCard";
import { useTranslation } from 'react-i18next';
import { about_us } from "../constants";

const About = () => {
  const { t } = useTranslation();
  const teamMembers = t('about.team', { returnObjects: true });

  // use image from constants (inherited from older version before seperating languages)
  const combinedTeamMembers = teamMembers.map(member => {
    const staticData = about_us.find(data => data.id === member.id);
    return { ...member, img: staticData.img };
  });

  return (
    <section id="about" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>{t('about.title')}</h2>
        <div className="w-full md:mt-20 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>{t('about.description')}
            <a href="#services" className="text-blue-500 hover:underline">
              {t('about.services')}
            </a>.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {combinedTeamMembers.map((member) => (
          <AboutCard key={member.id} {...member} />
        ))}
      </div>
    </section>
  );
};

export default About;
