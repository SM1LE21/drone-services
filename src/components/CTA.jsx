import styles from "../style";
import { CustomRequestButton } from "./Button";
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>{t('cta.title')}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('cta.description')}
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <CustomRequestButton />
      </div>
    </section>
  );
};

export default CTA;
