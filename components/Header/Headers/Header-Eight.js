import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import HeaderRightTwo from "../Header-Right/HeaderRight-Two";
import Search from "../Offcanvas/Search";
import Category from "../Category/Category";
import Nav from "../Nav";

import logo from "../../../public/images/home/header-logo.png";
import logoLight from "../../../public/images/dark/logo/logo-light.png";
import { useAppContext } from "@/context/Context";

const HeaderEight = ({
  headerType,
  gapSpaceBetween,
  sticky,
  headerSticky,
  navigationEnd,
  container,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  // const { isLightTheme } = useAppContext();
  const { mobile, setMobile, search, setSearch, cartToggle, setCart } =
    useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`rbt-header-wrapper ${gapSpaceBetween} ${sticky}  ${
          !headerType && isSticky ? `${headerSticky}` : ""
        }`}
      >
        <div className={`${container}`}>
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            <div className="header-left rbt-header-content">
              <div className="header-info">
                <div className="logo">
                  <Link href="/">
                    {/* {isLightTheme ? ( */}
                    <Image
                      src={logo}
                      width={175}
                      height={50}
                      priority={true}
                      alt="SixPhrase Logo"
                    />
                    {/* ) : (
                      <Image
                        src={logoLight}
                        width={152}
                        height={50}
                        priority={true}
                        alt="SixPharse Logo"
                      />
                    )} */}
                  </Link>
                </div>
              </div>
              <div className="access-icon d-none d-lg-block ml--30 ">
                <Link
                  className={`search-trigger-active pt--5 pb--5 pr--5 pl--5 border rounded-pill d-flex ${
                    search ? "" : "open"
                  }`}
                  href="#"
                  onClick={() => setSearch(!search)}
                >
                  <i className="feather-search mr--10 text-12"></i>
                  <p style={{ fontSize: "12px" }}>Search</p>
                </Link>
              </div>

              {/* <div className="header-info d-none d-lg-block">
                <Category />
              </div> */}
            </div>

            <div className="rbt-main-navigation d-none d-xl-block">
              <Nav />
            </div>

            <HeaderRightTwo
              userType="Admin"
              transparent="header-not-transparent header-sticky"
              gapSpaceBetween=""
              navigationEnd="rbt-navigation-end"
              btnClass="rbt-switch-btn btn-blue btn-sm hover-transform-none"
              btnText="Login"

               btnText1="signup"
              btnClass1="rbt-switch-btn btn-white btn-sm hover-transform-none"
            />
          </div>
        </div>
        <Search />
      </div>
    </>
  );
};

export default HeaderEight;
