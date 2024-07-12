import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import CategoryOne from "../Category/CategoryOne";
import MainDemoBanner from "./MainDemoBanner";
import Card from "../Cards/Card";
import AboutTwo from "../Abouts/About-Two";
import CallToAction from "../Call-To-Action/CallToAction";
import Counter from "../Counters/Counter";
import TestimonialSeven from "../Testimonials/Testimonial-Seven";
import EventCarouse from "../Events/EventCarouse";
import TeamTwo from "../Team/TeamTwo";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top";

import BlogData from "../../data/blog/blog.json";
import NewsletterTwo from "../Newsletters/Newsletter-Two";
import { ParallaxProvider } from "react-scroll-parallax";
import BrandThree from "../Brand/Brand-Three";
import ServiceThree from "../Services/Service-Three";
import CourseSix from "../Category/Filter/Course-Six";
import AboutSix from "../Abouts/About-Six";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import imgOne from "../../public/images/gallery/gallery-03.jpg";
import imgTwo from "../../public/images/gallery/gallery-01.jpg";
import imgThree from "../../public/images/gallery/gallery-05.jpg";
import hiImgOne from "../../public/images/home/personal mentor img.jpg";
import hiImgTwo from "../../public/images/home/personal mentor img.jpg";
import hiImgThree from "../../public/images/home/personal mentor img.jpg";
import Image from "next/image";

import CourseDetails from "../../data/course-details/courseData.json";
import SingleCourseData from "../../data/pages/11-singleCourse.json";
import CourseLessonProp from "../11-single-course/CourseLessonProp";
import courseImg from "../../public/images/course/course-content.jpg";
import CounterSix from "../Counters/Counter-Six";
import CounterFive from "../Counters/Counter-Five";

const MainDemo = () => {
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.languageAcademy));

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="rbt-banner-area rbt-banner-1">
          <MainDemoBanner />
        </div>

        <div className="rbt-categories-area bg-color-white ">
          <div className="container rbt-section-gapBottom border-bottom">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  {/* <span className="subtitle bg-primary-opacity">
                    CATEGORIES
                  </span> */}
                  <h3 className="title">
                    Industry <span className="color-green">Trust US</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row g-5 mt--20">
              <BrandThree />
            </div>
          </div>
        </div>

        <div className="rbt-service-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  {/* <span className="subtitle bg-pink-opacity">
                    ONLINE COURSE
                  </span> */}
                  <h3 className="title">
                    Trending On <span className="color-green">Six Phrase</span>
                  </h3>
                </div>
              </div>
            </div>
            <ServiceThree head={false} />
          </div>
        </div>
        
        <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
          <div className="container">
            <div className="row mb--30">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  {/* <span className="subtitle bg-secondary-opacity">Courses</span> */}
                  <h3 className="title">
                    Learn at <span className="color-green">Six Phrase</span>
                  </h3>
                </div>
              </div>
            </div>
            <CourseSix />
          </div>
        </div>

        <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
          <div className="container">
            <AboutSix
              btnClass="btn-blue btn-sm radius-round rbt-marquee-btn marquee-text-x"
              btnText="Explore Courses"
            />
          </div>
        </div>

        <div className="rbt-testimonial-area bg-color-white rbt-section-gapbottom overflow-hidden">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--10">
                    {/* <span className="subtitle bg-primary-opacity">
                      EDUCATION FOR EVERYONE
                    </span> */}
                    <h3 className="title">
                      Job Hiring
                      <span className="color-green "> Assessment</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TestimonialSeven />
        </div>

        <div className="rbt-banner-area rbt-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  className="swiper viral-banner-activation rbt-arrow-between"
                  slidesPerView={1}
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                  }}
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="thumbnail">
                        <Link href="#">
                          <Image
                            className="rbt-radius w-100"
                            src={hiImgOne}
                            width={1305}
                            height={425}
                            property="true"
                            alt="Banner Images"
                          />
                        </Link>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                      <div className="thumbnail">
                        <Link href="#">
                          <Image
                            className="rbt-radius w-100"
                            src={hiImgTwo}
                            width={1305}
                            height={425}
                            property="true"
                            alt="Banner Images"
                          />
                        </Link>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                      <div className="thumbnail">
                        <Link href="#">
                          <Image
                            className="rbt-radius w-100"
                            src={hiImgThree}
                            width={1305}
                            height={425}
                            property="true"
                            alt="Banner Images"
                          />
                        </Link>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div className="rbt-swiper-arrow rbt-arrow-left">
                    <div className="custom-overfolow">
                      <i className="rbt-icon feather-arrow-left"></i>
                      <i className="rbt-icon-top feather-arrow-left"></i>
                    </div>
                  </div>
                  <div className="rbt-swiper-arrow rbt-arrow-right">
                    <div className="custom-overfolow">
                      <i className="rbt-icon feather-arrow-right"></i>
                      <i className="rbt-icon-top feather-arrow-right"></i>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-course-card-area rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row align-items-center mb--30">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  {/* <span className="subtitle bg-pink-opacity">
                  Our Language Courses
                </span> */}
                  <h3 className="title">
                    Browse for <span className="color-green"> Jobs</span>{" "}
                  </h3>
                  {/* <p className="description has-medium-font-size mt--20">
                  Language Academy Courses?
                </p> */}
                </div>
              </div>
            </div>
            <div className="row g-5">
              {CourseDetails &&
                getAllCourse.map((data, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal-delay="150"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    key={index}
                  >
                    <div className={`rbt-card variation-03 rbt-hover`}>
                      <div className="rbt-card-img">
                        <Link
                          className="thumbnail-link"
                          href={`/course-details/${data.id}`}
                        >
                          <Image
                            src={data.courseImg}
                            width={355}
                            height={244}
                            alt="Card image"
                          />{" "}
                          <span className="rbt-btn btn-white icon-hover btn-md">
                            <span className="btn-text">Read More</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                          </span>
                        </Link>
                      </div>
                      <div className="rbt-card-body">
                        <h4 className="rbt-card-title">
                          <Link href={`/course-details/${data.id}`}>
                            {data.courseTitle}
                          </Link>
                        </h4>

                        <div className="rbt-card-bottom">
                          <Link
                            className="transparent-button"
                            href={`/course-details/${data.id}`}
                          >
                            <svg
                              width="17"
                              height="12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="#27374D"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                <path
                                  strokeLinecap="square"
                                  d="M.663 5.572h14.594"
                                ></path>
                              </g>
                            </svg>
                          </Link>
                        </div>
                      </div>
                      <div className="card-information">
                        <div className="card-flag">
                          <Image
                            src={data.countryFlag}
                            width={21}
                            height={21}
                            alt="united-kingdom"
                          />
                        </div>
                        <div className="card-count">{data.lesson} programs</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div
          className="rbt-course-content rbt-section-gap bg-color-extra2"
          id="coursecontent"
        >
          <div className="container">
            <div className="row align-items-end mb--30">
              <div className="col-lg-6 col-md-6">
                <div className="section-title text-start">
                  <h3 className="title">
                    Choose Internship That's
                    <span className="color-green"> Right For You</span>
                  </h3>
                  {/* <p className="description has-small-font-size mt--10">
                  32 sections • 376 lectures • 27h 8m total length
                </p> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="expend-button text-start text-md-end">
                  <Link className="rbt-btn-link w-700" href="#">
                    Browse More<i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row gy-5 row--30">
              <CourseLessonProp
                courseImg={courseImg}
                courseContent={SingleCourseData.courseContent}
              />
            </div>
          </div>
        </div>

        <div
          className="rbt-program-area rbt-section-gap bg-color-white"
          id="program"
        >
          <div className="container">
            <div className="row g-5 align-items-end mb--30">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="section-title text-start">
                  <h3 className="title">
                    Pick The Right
                    <sapn className="color-green"> Opportunity!</sapn>
                  </h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="load-more-btn text-start text-lg-end">
                  <Link className="rbt-btn-link" href="#">
                    Browse More<i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row g-5">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rbt-category-gallery">
                  <div className="thumbnail">
                    <Link href="#">
                      <Image
                        src={imgOne}
                        property="true"
                        alt="Gallery Images"
                      />
                      <div className="rbt-bg-overlay"></div>
                    </Link>
                    <div className="hover-content">
                      <h3 className="title">
                        <Link href="#">Vue-Js</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rbt-category-gallery">
                  <div className="thumbnail">
                    <Link href="#">
                      <Image
                        src={imgTwo}
                        property="true"
                        alt="Gallery Images"
                      />
                      <div className="rbt-bg-overlay"></div>
                    </Link>
                    <div className="hover-content">
                      <h3 className="title">
                        <Link href="#">React Js</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rbt-category-gallery">
                  <div className="thumbnail">
                    <Link href="#">
                      <Image
                        src={imgThree}
                        property="true"
                        alt="Gallery Images"
                      />
                      <div className="rbt-bg-overlay"></div>
                    </Link>
                    <div className="hover-content">
                      <h3 className="title">
                        <Link href="#">Javascript</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-counterup-area bg-gradient-6 rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center color-white">
                  <h3 className="title color-white">Why Six Phrase</h3>
                  <p className="description has-medium-font-size mt--20">
                    Learning new technology, data sience, university,
                    communicate to global world and build a bright future with
                    our histudy.
                  </p>
                </div>
              </div>
            </div>
            <CounterFive head={false} />
          </div>
        </div>


        <div className="rbt-newsletter-area newsletter-style-2 newsletter-bg rbt-section-gap">
          <NewsletterTwo />
        </div>




        {/* <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-secondary-opacity">
                    Top Popular Course
                  </span>
                  <h2 className="title">
                    Histudy Course student <br /> can join with us.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row row--15">
              <Card
                col="col-lg-4 col-md-6 col-sm-6 col-12"
                mt="mt--30"
                start={0}
                end={3}
                isDesc={true}
                isUser={true}
              />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="load-more-btn mt--60 text-center">
                  <Link
                    className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Load More Course (40)</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1">
          <div className="container">
            <ParallaxProvider>
              <AboutTwo />
            </ParallaxProvider>
          </div>
        </div>

        <div className="rbt-callto-action-area mt_dec--half">
          <CallToAction />
        </div>

        <div className="rbt-counterup-area bg-color-extra2 rbt-section-gapBottom default-callto-action-overlap">
          <div className="container">
            <Counter isDesc={false} />
          </div>
        </div>

        <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--10">
                    <span className="subtitle bg-primary-opacity">
                      EDUCATION FOR EVERYONE
                    </span>
                    <h2 className="title">
                      People like histudy education. <br /> No joking - here’s
                      the proof!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TestimonialSeven />
        </div>

        <div className="rbt-event-area rbt-section-gap bg-gradient-3">
          <div className="container">
            <div className="row mb--55">
              <div className="section-title text-center">
                <span className="subtitle bg-white-opacity">
                  STIMULATED TO TAKE PART IN?
                </span>
                <h2 className="title color-white">Upcoming Events</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <EventCarouse />
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-team-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    Our Teacher
                  </span>
                  <h2 className="title">Whose Inspirations You</h2>
                </div>
              </div>
            </div>
            <TeamTwo />
          </div>
        </div>

        <div className="rbt-rbt-blog-area rbt-section-gap bg-color-extra2">
          <div className="container">
            <div className="row g-5 align-items-center mb--30">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title">
                  <span className="subtitle bg-pink-opacity">Blog Post</span>
                  <h2 className="title">Post Popular Post.</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="read-more-btn text-start text-md-end">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/blog"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">See All Articles</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <BlogGridTop BlogData={BlogData} />
          </div>
        </div>

        <div className="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
          <NewsletterTwo />
        </div> */}


      </main>
    </>
  );
};

export default MainDemo;
