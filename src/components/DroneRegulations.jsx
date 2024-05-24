import React from 'react';
import styles from "../style";
import { useTranslation } from 'react-i18next';

const DroneRegulations = () => {
    const { t } = useTranslation();

    return (
        <section id="regulations" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h2 className={styles.heading2}>{t('regulations.title')}</h2>
                <div className="w-full">
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        {t('regulations.description')}
                        <a href="https://dac.gouvernement.lu/fr/drones.html/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            {t('regulations.linkText')}
                        </a>.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                {/* Additional content or graphical elements can be added here if needed */}
            </div>
        </section>
    );
};

export default DroneRegulations;