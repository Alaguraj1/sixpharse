import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import MenuData from "../../data/MegaMenu";

import CourseLayout from "./NavProps/CourseLayout";
import PageLayout from "./NavProps/PageLayout";
import ElementsLayout from "./NavProps/ElementsLayout";

import addImage from "../../public/images/service/mobile-cat.jpg";

const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const router = useRouter();

  const isActive = (href) => router.pathname.startsWith(href);

  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className=" position-static">
          <Link href="#">Learn</Link>
        </li>

        <li className=" position-static">
          <Link href="#">Intern</Link>
        </li>

        <li className="has-dropdown  has-menu-child-item">
          <Link
            className={`${activeMenuItem === "Compete" ? "open" : ""}`}
            href="#"
            onClick={() => toggleMenuItem("Compete")}
          >
            Compete
            <i className="feather-chevron-down"></i>
          </Link>
          <ul
            className={`submenu ${
              activeMenuItem === "Compete" ? "active d-block" : ""
            }`}
          >
            {MenuData &&
              MenuData.menuData.map((data, index) => {
                if (data.menuType === "default-dropdown") {
                  const elements = data.menuItems?.map((value, innerIndex) => (
                    <li className="has-dropdown" key={innerIndex}>
                      <Link href="#">{value.title}</Link>
                      <ul className="submenu">
                        {value.submenuItems?.map(
                          (submenuItem, submenuItemIndex) => (
                            <li key={submenuItemIndex}>
                              <Link href={submenuItem.link}>
                                {submenuItem.title}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  ));
                  return elements;
                }
                return null;
              })}
          </ul>
        </li>
        <li className=" position-static">
          <Link href="#">Jobs</Link>
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="#"
            className={`${activeMenuItem === "Institutions" ? "open" : ""}`}
            onClick={() => toggleMenuItem("Institutions")}
          >
            Institutions
            <i className="feather-chevron-down"></i>
          </Link>
          <div
            className={`rbt-megamenu grid-item-3 ${
              activeMenuItem === "Institutions" ? "active d-block" : ""
            }`}
          >
            <div className="wrapper">
              <div className="row row--15 single-dropdown-menu-presentation">
                <ElementsLayout
                  MenuData={MenuData}
                  menuGrid="grid-item-3"
                  num1={0}
                  num2={9}
                />
                <ElementsLayout
                  MenuData={MenuData}
                  menuGrid="grid-item-3"
                  num1={10}
                  num2={18}
                />
                <ElementsLayout
                  MenuData={MenuData}
                  menuGrid="grid-item-3"
                  num1={19}
                  num2={27}
                />
              </div>
             
            </div>
          </div>
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="#"
            className={`${activeMenuItem === "Carrers" ? "open" : ""}`}
            onClick={() => toggleMenuItem("Carrers")}
          >
            Careers
            <i className="feather-chevron-down"></i>
          </Link>
          <div
            className={`rbt-megamenu grid-item-3 ${
              activeMenuItem === "Carrers" ? "active d-block" : ""
            }`}
          >
            <div className="wrapper">
              <div className="row row--15">
                <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                  <h3 className="rbt-short-title">Careers Styles</h3>
                  <ul className="mega-menu-item">
                    {MenuData &&
                      MenuData.menuData.map((data, index) => {
                        if (data.menuType === "grid-item-5") {
                          const elements = data.menuItems?.map(
                            (value, innerIndex) =>
                              value.id <= 7 && (
                                <li key={innerIndex}>
                                  <Link
                                    className={
                                      isActive(value.link) ? "active" : ""
                                    }
                                    href={
                                      value.coming ? "/maintenance" : value.link
                                    }
                                  >
                                    {value.title}
                                    {value.coming ? (
                                      <span className="rbt-badge-card ms-3">
                                        {value.coming}
                                      </span>
                                    ) : value.subTitle ? (
                                      <span className="rbt-badge-card">
                                        {value.subTitle}
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </Link>
                                </li>
                              )
                          );
                          return elements;
                        }
                      })}
                  </ul>
                </div>
                <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                  <h3 className="rbt-short-title">Get Started</h3>
                  <ul className="mega-menu-item">
                    {MenuData &&
                      MenuData.menuData.map((data, index) => {
                        if (data.menuType === "grid-item-5") {
                          const elements = data.menuItems?.map(
                            (value, innerIndex) =>
                              value.id > 7 &&
                              value.id <= 14 && (
                                <li key={innerIndex}>
                                  <Link
                                    href={
                                      value.coming ? "/maintenance" : value.link
                                    }
                                    className={
                                      isActive(value.link) ? "active" : ""
                                    }
                                  >
                                    {value.title}
                                    {value.coming ? (
                                      <span className="rbt-badge-card ms-3">
                                        {value.coming}
                                      </span>
                                    ) : value.subTitle ? (
                                      <span className="rbt-badge-card">
                                        {value.subTitle}
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </Link>
                                </li>
                              )
                          );
                          return elements;
                        }
                      })}
                  </ul>
                </div>
                <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                  <div className="rbt-ads-wrapper">
                    <Link className="d-block" href="#">
                      <Image src={addImage} alt="Education Images" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="position-static">
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
