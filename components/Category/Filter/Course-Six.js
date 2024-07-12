import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import CourseDetails from "../../../data/course-details/courseData.json";

const CourseSix = () => {
  let getAllCourse = JSON.parse(
    JSON.stringify(CourseDetails.courseDetails.slice(0, 14))
  );
  const [courseFilter, setCourseFilter] = useState(getAllCourse);
  const [activeTab, setActiveTab] = useState("all course");

  const filterItem = (types) => {
    const updateItem = getAllCourse.filter((curElm) => {
      return curElm.courseType === types;
    });

    if (types !== "all course") {
      setCourseFilter(updateItem);
    } else {
      setCourseFilter(getAllCourse);
    }
  };

  const handleButtonClick = (courseType) => {
    setCourseFilter(getAllCourse);
    setActiveTab(courseType);
    filterItem(courseType);
  };
  return (
    <>
      <div className="row ">
        <div className="col-lg-12">
          <ul
            className="rbt-portfolio-filter filter-tab-button text-center nav nav-tabs light-blue-bg"
            id="rbt-myTab"
            role="tablist"
          >
            <p className="filter-text mb-0 align-self-center">
              POPULAR CATEGORIES:
            </p>
            {["all course",
              "commerce",
              "technology",
              "data science",
              "mba",
              "employability skills",
              "company based training",
            ].map((courseType, index) => (
              <li key={index} className="nav-item" role="presentation">
                <button
                  className={activeTab === courseType ? "active" : ""}
                  type="button"
                  onClick={() => handleButtonClick(courseType)}
                >
                  <span className="filter-text">{courseType}</span>
                  {/* {courseType === "All Course" ? (
                      <span className="course-number">
                        {getAllCourse.filter((course) => course).length}
                      </span>
                    ) : (
                      <span className="course-number">
                        0
                        {
                          getAllCourse.filter(
                            (course) => course.courseType === courseType
                          ).length
                        }
                      </span>
                    )} */}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content mt--60" id="rbt-myTabContent">
            <div className="row g-5">
              {courseFilter.slice(0, 4).map((data, index) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
                  key={index}
                >
                  <div className={`rbt-card p-0 variation-01 rbt-hover `}>
                    <div className="rbt-card-img">
                      <Link href={`/course-details/${data.id}`}>
                        <Image
                          src={data.courseImg}
                          width={355}
                          height={244}
                          alt="Card image"
                        />
                        {/* <div className="rbt-badge-3 bg-white">
                          <span>-{data.offPrice}%</span>
                          <span>Off</span>
                        </div> */}
                      </Link>
                    </div>
                    <div className="rbt-card-body pl--20 pr--20 pb--20">
                      <div className="rbt-card-top mb--0">
                        <div>
                          <ul className="rbt-meta mb--0">
                            <li>Online</li>
                            <li>Free</li>
                          </ul>
                        </div>
                        <div className="rbt-bookmark-btn">
                          <Link
                            className="rbt-round-btn"
                            title="Bookmark"
                            href="#"
                          >
                            <i className="feather-heart"></i>
                          </Link>
                        </div>
                      </div>

                      <h5 className="rbt-card-title">
                        <Link href={`/course-details/${data.id}`}>
                          {data.courseTitle.substring(0, 35)}
                        </Link>
                      </h5>
                      <div className="rbt-card-bottom">
                        <ul className="card-body-lists ">
                          <li>
                            <i className="feather-users"></i>
                          <span className="pl--5">  {data.courseType}</span>
                          </li>
                          <li>
                            <i className="feather-clock"></i>
                            <span className="pl--5">11 hours</span>
                          </li>
                        </ul>
                        <Link
                          className="rbt-btn-link"
                          href={`/course-details/${data.id}`}
                        >
                          <i className="feather-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSix;
