import { useSelector } from "react-redux";
const Partners = ({ dark }) => {

    // importing data from the redux toolkit store

    const social_handles = useSelector((state) => state.user?.user?.user?.social_handles) || [];

  return (
    <>
      <div className="dizme_tm_main_title" data-align="center">
        <span>Social Media Handles</span>
        <h3>Connect with Me!</h3>        
      </div>
      <div className="dizme_tm_section">
        <div className="dizme_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <ul>
              {social_handles &&
                social_handles.map((data, i) => (
                  <li
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    key={i}
                    data-wow-delay={`0.${i + 1 * 2}s`}
                  >
                    <div className="list_inner">
                      <img
                        src={data.image.url}
                        alt="image"
                      />
                      {/* <span> {data.platform} </span> */}
                      {/* <a className="dizme_tm_full_link"  href="/" /> */}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/partners/1.png" alt="image" />
        </div>
      </div>
    </div>
    </>

  );
};
export default Partners;
