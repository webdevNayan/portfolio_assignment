import { useState } from "react";
import { useSelector } from "react-redux";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fatchData } from "../utilits";

// Initialize Swiper core components
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

const Testimonial = () => {
  // State to hold testimonial data
  const [data, setData] = useState([]);

  // Importing data from the Redux store
  const testimonials = useSelector((state) => state.user?.user?.user?.testimonials) || [];

  // Swiper configuration
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots", // Pagination element selector
      clickable: true, // Enable pagination clickable
    },
  };

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_testimonials">
        <div className="dizme_tm_main_title" data-align="center">
          <span>Testimonials</span>
          <h3>What My Clients Say</h3>
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </p>
        </div>
        <div className="list_wrapper">
          <div className="total">
            <div className="in">
              {/* Swiper component to display testimonials */}
              <Swiper {...props} className="">
                {testimonials &&
                  testimonials.map((data, i) => (
                    <SwiperSlide key={i}>
                      {/* Testimonial icon */}
                      <div className="icon">
                        {/* SVG icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          width="200px"
                          height="200px"
                          viewBox="796 698 200 200"
                          enableBackground="new 796 698 200 200"
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          {/* SVG paths */}
                        </svg>
                      </div>
                      {/* Testimonial text */}
                      <div className="text">
                        <p>{data.review}</p>
                      </div>
                      <div className="short">
                        {/* Testimonial image */}
                        <div className="image">
                          {data.image && data.image.url && (
                            <div
                              className="main"
                              data-img-url={data.image.url}
                              style={{ backgroundImage: `url(${data.image.url})` }}
                            />
                          )}
                        </div>
                        {/* Testimonial details */}
                        <div className="detail">
                          <h3>{data.name}</h3>
                          <span>{data.position}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              {/* Pagination dots */}
              <div className="owl-dots"></div>
            </div>
            {/* Left and right details */}
            <div className="left_details">
              {/* Left detail images */}
            </div>
            <div className="right_details">
              {/* Right detail images */}
            </div>
          </div>
        </div>
        {/* Brush image */}
        <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/testimonials/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
