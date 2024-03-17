import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Isotope from "isotope-layout";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const projects = useSelector((state) => state.user?.user?.user?.projects) || [];
  const [popup, setPopup] = useState(false);
  const [filterKey, setFilterKey] = useState("*");
  const isotope = useRef(null);

  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      isotope.current = new Isotope(".grid", {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });
    }
  }, [projects]);

  useEffect(() => {
    if (isotope.current) {
      const iso = isotope.current;
      iso.arrange({ filter: filterKey });
    }
  }, [filterKey, projects]);

  const handleFilterKeyChange = (key) => {
    setFilterKey(key);
  };

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a className={`c-pointer ${filterKey === "*" ? "current" : ""}`} onClick={() => handleFilterKeyChange("*")}>
                  All
                </a>
              </li>
              {["Reactjs", "Nextjs", "Mern", "CSS", "TailwindCSS"].map((tech) => (
                <li key={tech}>
                  <a className={`c-pointer ${filterKey === `.${tech.toLowerCase()}` ? "current" : ""}`} onClick={() => handleFilterKeyChange(`.${tech.toLowerCase()}`)}>
                    {tech}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {projects.map((project) => (
                <li key={project._id} className={`grid-item ${project.techStack.map((tech) => tech.trim().toLowerCase()).join(" ")}`}>
                  <div className="inner">
                    <div className="entry dizme_tm_portfolio_animation_wrap" data-title={project.title} data-category={project.techStack.join(" ")}>
                      <a href="#">
                        <img src={project.image.url} alt="image" />
                        <div className="main" data-img-url={project.image.url} />
                      </a>
                    </div>
                    <div className="mobile_title">
                      <h3>{project.title}</h3>
                      <span>{project.techStack.join(", ")}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
