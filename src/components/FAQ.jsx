import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../style';
import Navbar from './Navbar'; 
import Footer from './Footer';

const FAQ = () => {
    const { t } = useTranslation();
    const faqData = t('faq.questions', { returnObjects: true });

    return (
        <div className="bg-primary w-full overflow-hidden">
            <Navbar />
            <section id="faq" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
                <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
                <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                    <h2 className={styles.heading2}>{t('faq.title')}</h2>
                </div>
                <div className="w-full flex flex-col relative z-[1]">
                    {faqData.map((item, index) => (
                        <div key={index} className="mb-4">
                            <h3 className={styles.heading3}>{item.question}</h3>
                            <p className={styles.paragraph}>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default FAQ;
