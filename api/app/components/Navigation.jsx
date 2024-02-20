"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { backgroundImages } from "../data/background";
import SectionWithInHeader from "./SectionWithInHeader";

const Navigation = () => {
  let page = usePathname().split("/")[1] ? usePathname().split("/")[1] : "home";
  const [section1Details, setSection1Details] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchSection1Items = async () => {
      try {
        const response = await fetch(  
          `http://localhost:8080/getsection1items?page=${page}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSection1Details(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchSection1Items();
  }, [page]);

  const bgImage = backgroundImages;
  const backgroundImageStyle =
    bgImage && bgImage[page]
      ? { backgroundImage: `url(${bgImage[page]})` }
      : {};
  const wrapperClasses = `wrapper atr-sm-padding-horizontal-32 atr-md-padding-horizontal-48 atr-xl-padding-horizontal-16 ${
    bgImage[page] ? "bg-image" : ""
  }`;
  
  
  return (
    <div className={wrapperClasses} style={backgroundImageStyle}>
      <header className="header atr-sm-padding-vertical-32" role="banner">
        <div className="wrapper atr-flex atr-sm-padding-vertical-4 atr-sm-justify-content-space-between atr-sm-align-items-center">
          <Link href="/" className="header__logo"></Link>
          <nav className="header__nav" role="navigation">
            <div
              className="header__nav-button"
              role="button"
              aria-hidden="true"
            >
              <span className="header__nav-button-icon"> </span>
            </div>
            <ul className="atr-flex atr-sm-12 atr-sm-flex-direction-column atr-lg-flex-direction-row atr-sm-padding-vertical-48 atr-xl-padding-vertical-0 atr-sm-padding-horizontal-48 atr-xl-padding-horizontal-0">
              <li
                className={`atr-sm-padding-vertical-8 atr-sm-padding-horizontal-12 ${
                  page === "business" ? "nav__item--active" : ""
                }`}
                id="1435201282086"
              >
                <Link href="/business" title="Business">
                  {" "}
                  Business
                </Link>
              </li>
              <li
                className={`atr-sm-padding-vertical-8 atr-sm-padding-horizontal-12 ${
                  page === "developer" ? "nav__item--active" : ""
                }`}
                id="1435202094070"
              >
                <Link href="/developer" title="Developers">
                  Developers
                </Link>
              </li>
              <li
                className={`atr-sm-padding-vertical-8 atr-sm-padding-horizontal-12 ${
                  page === "api-store" ? "nav__item--active" : ""
                }`}
                id="1435202094414"
              >
                <Link href="/api-store" title="API store">
                  {" "}
                  API store
                </Link>
              </li>
              <li
                className={`atr-sm-padding-vertical-8 atr-sm-padding-horizontal-12 ${
                  page === "about-us" ? "nav__item--active" : ""
                }`}
                id="1435202096513"
              >
                <Link href="/about-us" title="About us">
                  {" "}
                  About us
                </Link>
              </li>
              <li
                className={`atr-sm-padding-vertical-8 atr-sm-padding-horizontal-12 ${
                  page === "contact" ? "nav__item--active" : ""
                }`}
                id="1435202096734"
              >
                <Link href="/contact" title="Contact">
                  {" "}
                  Contact
                </Link>
              </li>
              <li
                className="atr-sm-margin-top-16 atr-xl-margin-top-0 atr-xl-margin-left-12"
                id="1435201286353"
              >
                <a
                  href="https://developer.atradius.com/"
                  title="Log in"
                  target="_blank"
                  className="button button--white"
                >
                  {" "}
                  Log in
                </a>
              </li>
              <li
                className="atr-sm-margin-top-16 atr-xl-margin-top-0 atr-xl-margin-left-12"
                id="1435201286400"
              >
                <Link
                  href="/register-now"
                  title="Get started"
                  target="_self"
                  className="button button--red"
                >
                  {" "}
                  Get started
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {wrapperClasses.includes("bg-image") && section1Details && section1Details.Section1Teasers && 
        (
          <SectionWithInHeader content={section1Details} />
        )}
    </div>
  );
};
export default Navigation;
