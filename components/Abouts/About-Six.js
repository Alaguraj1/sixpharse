import Image from "next/image";
import Link from "next/link";

import AboutData from "../../data/elements/about.json";

const AboutSix = ({ btnClass, btnText }) => {
  return (
    <>
      {AboutData &&
        AboutData.aboutSix.map((data, index) => (
          <div className="row g-5 align-items-center" key={index}>
            <div className="col-lg-6 pr--0">
              <div className="content d-flex justify-content-end">
                <Image
                  src={data.img}
                  width={500}
                  height={410}
                  alt="About Images"
                />
              </div>
            </div>
            <div className="col-lg-6 levelup-skills-content d-flex justify-content-start">
              <div className="inner pl--30 pl_sm--5 pr--30 pr_sm--5 pt--30 pt_sm--30 pb--30 pb_sm--30">
                <div className="section-title text-start">
                  {/* <span className="subtitle bg-primary-opacity">
                    {data.tag}
                  </span> */}
                  <h3 className="title">{data.title}<span className="color-green d-block">{data?.subTitle}</span></h3>
                  <p className="description mt--20 mb--10">
                    <strong>{data.strong}</strong> {data.desc}
                  </p>
                  <p className="description">
                   {data.desc2}
                  </p>
                  <ul className="rbt-meta  d-flex">
                      <li className="pr--20" >
                        <i className="feather-check-circle mr--0 levelup-content-icon"></i> {data?.course}
                      </li>
                      <li  className="pr--20">
                        <i className="feather-check-circle mr--0 levelup-content-icon"></i> {data?.certificate}
                      </li>
                      <li className="pr--20">
                        <i className="feather-check-circle mr--5 levelup-content-icon"></i>
                    {data.project}
                      </li>
                    </ul>
                  <div className="read-more-btn mt--40">
                    <Link className={`rbt-btn ${btnClass}`} href="#">
                      <span data-text={`${btnText}`}>{btnText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AboutSix;
