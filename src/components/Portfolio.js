import Isotope from "isotope-layout";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
   const projects = useSelector((state) => state.user?.user?.user?.projects) || [];
   
   // Add popup state variable
   const [popup, setPopup] = useState(false);

   useEffect(() => {
      dataImage();
      portfolioHover();
   }, []);

   const isotope = useRef(null);
   const [filterKey, setFilterKey] = useState("*");

   useEffect(() => {
      if (isotope.current) {
         isotope.current.arrange({ filter: `.${filterKey}` });
      }
   }, [filterKey]);

   const handleFilterKeyChange = (key) => () => {
      setFilterKey(key);
   };

   const activeBtn = (value) => (value === filterKey ? "current" : "");

   return (
      <div className="dizme_tm_section" id="portfolio">
         {/* Use popup state variable */}
         <DetailsPopup open={popup} close={() => setPopup(false)} />
         <div className="dizme_tm_portfolio">
            <div className="container">
               <div className="dizme_tm_main_title" data-align="center">
                  <span>Portfolio</span>
                  <h3>My Amazing Works</h3>
                  <p>
                     Most common methods for designing websites that work well on desktop is responsive and adaptive design
                  </p>
               </div>
               <div className="portfolio_filter">
                  <ul>
                     <li>
                        <a className={`c-pointer ${activeBtn("*")}`} onClick={handleFilterKeyChange("*")}>
                           All
                        </a>
                     </li>
                     {/* Render tech stacks dynamically */}
                     {["Reactjs", "Nextjs", "Mern", "CSS", "TailwindCSS"].map((tech) => (
                        <li key={tech}>
                           <a
                              className={`c-pointer ${activeBtn(tech.toLowerCase())}`}
                              onClick={handleFilterKeyChange(tech.toLowerCase())}
                           >
                              {tech}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="dizme_tm_portfolio_titles" />
               <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
                  <ul className="gallery_zoom grid">
                     {/* Map through projects and filter based on the selected tech stack */}
                     {projects.map((project) => (
                        <li
                           key={project._id}
                           className={`grid-item ${project.techStack.map((tech) => tech.toLowerCase()).join(" ")}`}
                        >
                           <div className="inner">
                              <div
                                 className="entry dizme_tm_portfolio_animation_wrap"
                                 data-title={project.title}
                                 data-category={project.techStack.join(" ")}
                              >
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
