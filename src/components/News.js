import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { aTagClick, fatchData } from "../utilits";
import BlogPopUp from "./popup/BlogPopUp";

const News = () => {

  // importing data from the redux toolkit store

  const timeline = useSelector((state) => state.user?.user?.user?.timeline) || [];
  
  const [data, setData] = useState([]);
  const [popupData, setPopupData] = useState({});
  const [popup, setPopup] = useState(false);

  // useEffect(async () => {
  //   setData(await fatchData("/static/blog.json"));
  //   aTagClick();
  // }, []);

  // Function to format date strings
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="dizme_tm_section" id="blog">
      <BlogPopUp open={popup} data={popupData} close={() => setPopup(false)} />
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span> My Timeline </span>
            <h3>{`Work History and Achievements`}</h3>
          </div>
          <div className="news_list">
            <ul>
              {timeline &&
                timeline.map((blog, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/42-29.jpg" alt="image" />
                        <div
                          className="main"
                          data-img-url={blog && blog.img}
                          style={{
                            backgroundImage: `url("https://www.careeraddict.com/uploads/article/59897/career-developm-work-experience-benefits.jpg")`,
                          }}
                        />
                        <div className="date">
                          <h3>{formatDate(blog.startDate)}</h3>
                          <span>{formatDate(blog.endDate)}</span>
                        </div>
                        <a
                          className="dizme_tm_full_link"
                          href="#"
                          onClick={() => {
                            setPopupData(blog && blog);
                            setPopup(true);
                          }}
                        />
                      </div>
                      <div className="details">
                        <span className="category">
                          <a href="#">{blog.company_name}</a>
                        </span>
                        <h3 className="title">
                          <a href="#">{blog.jobTitle}</a>
                        </h3>
                      </div>
                      <div className="news_hidden_details">
                        <div className="news_popup_informations">
                          <div className="text">
                            {blog.details &&
                              blog.details.map((details, i) => (
                                <p key={i}>{details}</p>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default News;
