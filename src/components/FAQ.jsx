import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../style';
import Navbar from './Navbar'; 
import Footer from './Footer';

const FAQ = () => {
    const { t } = useTranslation();
    const faqData = t('faq.questions', { returnObjects: true });
    const [openIndex, setOpenIndex] = useState(null);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} bg-primary`}>
                <section id="faq" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative z-10`}>
                    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
                    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                        <h2 className={`${styles.heading4}`}>{t('faq.title')}</h2>
                    </div>
                    <div className="w-full flex flex-col relative z-[1]">
                        {faqData.map((item, index) => (
                            <div key={index} className="mb-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer bg-gray-800 p-4 rounded-lg"
                                    onClick={() => toggleSection(index)}
                                >
                                    <h3 className="text-white">{item.question}</h3>
                                    <span
                                        className={`transform transition-transform duration-200 ${
                                            openIndex === index ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 16L8 12H16L12 16Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </div>
                                {openIndex === index && (
                                    <div className="mt-3 p-4 bg-gray-900 rounded-lg">
                                        <p className="text-gray-400">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default FAQ;
