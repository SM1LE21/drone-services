import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { close, logo, menu } from "../assets";
import { scrollToHome } from "./scrollToHome";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // State to track the current language
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    // Update the state when the language changes
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const navLinks = [
    { id: t('nav.links.services.id'), title: t('nav.links.services.title'), path: '#services' },
    { id: t('nav.links.about.id'), title: t('nav.links.about.title'), path: '#about' },
    // { id: 'gallery', title: t('nav.links.gallery.title'), path: '/gallery' },  // Added gallery link
    { id: 'faq', title: 'FAQ', path: '/faq' }
  ];

  // Function to change the language
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  // Function to handle navigation for hash links
  const handleNavClick = (path) => {
    if (path.startsWith('#')) {
      if (window.location.pathname !== '/') {
        navigate('/', { state: { scrollTo: path.slice(1) } });
      } else {
        document.getElementById(path.slice(1)).scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative z-50">
      <img
        src={logo}
        alt="swiftDrones"
        className="w-[124px] h-[32px] cursor-pointer"
        onClick={() => {
          console.log('Logo clicked');
          handleNavClick("#home");
          scrollToHome();
        }}
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${
              active === nav.title ? "text-white" : "text-dimWhite"
            }`}
            onClick={() => {
              setActive(nav.title);
              handleNavClick(nav.path);
            }}
          >
            {nav.path.startsWith('#') ? (
              <a href={nav.path}>{nav.title}</a>
            ) : (
              <Link to={nav.path}>{nav.title}</Link>
            )}
          </li>
        ))}
        {/* Language Selector */}
        <li className="font-poppins font-normal cursor-pointer text-[16px]">
          <select
            value={currentLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            className="text-white bg-transparent cursor-pointer"
          >
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="fr">FR</option>
          </select>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  handleNavClick(nav.path);
                }}
              >
                {nav.path.startsWith('#') ? (
                  <a href={nav.path}>{nav.title}</a>
                ) : (
                  <Link to={nav.path}>{nav.title}</Link>
                )}
              </li>
            ))}
            {/* Language Selector for Mobile */}
            <li className="font-poppins font-medium cursor-pointer text-[16px] mt-4">
              <select
                value={currentLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
                className="text-white bg-transparent cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="de">DE</option>
                <option value="fr">FR</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
