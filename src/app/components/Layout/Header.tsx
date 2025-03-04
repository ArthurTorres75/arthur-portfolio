import React, { ReactNode, useState } from "react";
import { Metadata } from "next";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useAppContext } from "@/app/context/AppContext";
import "./Header.css";

const metadata: Metadata = {
  title: "Arthur's Portfolio",
  description: "The best portfolio",
};

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { name } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentLanguage = i18n.language;

  const changeLanguage = (language: "en" | "es") => {
    i18n.changeLanguage(language);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex flex-col mt-6 sm:flex-row justify-between items-center p-4 bg-opacity-75 mx-10">
        <title>{metadata.title as ReactNode}</title>
        <meta name="description" content={metadata?.description || ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <h1 className="text-xl font-bold shining-text">{name}</h1>
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <nav className="hidden sm:flex space-x-4 mt-4 sm:mt-0 sm: text-left text-lg loader-text-from-up">
          <Link href="/" passHref>
            <span className="hover:text-blue-300 transition duration-300 transform hover:scale-110">
              {t("about")}
            </span>
          </Link>
          <Link href="/projects" passHref>
            <span className="hover:text-blue-300 transition duration-300 transform hover:scale-110">
              {t("projects")}
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span className="hover:text-blue-300 transition duration-300 transform hover:scale-110">
              {t("contact")}
            </span>
          </Link>
        </nav>
        <div className="hidden sm:flex space-x-4 mt-4 sm:mt-0">
          <button
            className="hover:text-blue-300 cursor-pointer transition duration-300"
            onClick={() => {
              changeLanguage(currentLanguage === "en" ? "es" : "en");
            }}
          >
            {currentLanguage === "en" ? "ES" : "EN"}
          </button>
          {/* <button className="hover:text-blue-300 transition duration-300">
            🌞/🌜
          </button> */}
        </div>
      </header>
      {isMenuOpen && (
        <aside className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
          <button
            className="text-4xl text-white mb-8 focus:outline-none"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <nav className="flex flex-col space-y-4 text-2xl">
            <Link href="#about" passHref>
              <span
                className="hover:text-blue-300 transition duration-300"
                onClick={toggleMenu}
              >
                {t("about")}
              </span>
            </Link>
            <Link href="#projects" passHref>
              <span
                className="hover:text-blue-300 transition duration-300"
                onClick={toggleMenu}
              >
                {t("projects")}
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span
                className="hover:text-blue-300 transition duration-300"
                onClick={toggleMenu}
              >
                {t("contact")}
              </span>
            </Link>
            <button
              className="hover:text-blue-300 transition duration-300"
              onClick={() => {
                toggleMenu();
                changeLanguage(currentLanguage === "en" ? "es" : "en");
              }}
            >
              {currentLanguage === "en" ? "ES" : "EN"}
            </button>
            {/* <button
              className="hover:text-blue-300 transition duration-300"
              onClick={toggleMenu}
            >
              🌞/🌜
            </button> */}
          </nav>
        </aside>
      )}
    </>
  );
};
