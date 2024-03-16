import Counter from "./Counter";
import { useSelector } from 'react-redux';

const About = ({ dark }) => {
  // const { title } = useSelector((state) => state.user?.user?.user?.about) || {};

  const { description,  subTitle, title, exp_year, some_total} = useSelector((state) => state.user?.user?.user?.about) || {};

  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={exp_year} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={some_total} />K
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a `} {title} </span>
                {/* <h3>I Can Design Anything You Want</h3> */}
                <h3>{subTitle}</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {/* {`Hello there! I'm a web designer, and I'm very passionate and
                  dedicated to my work. With 20 years experience as a
                  professional web developer, I have acquired the skills and
                  knowledge necessary to make your project a success. I enjoy
                  every step of the design process, from discussion and
                  collaboration.`} */}
                  {description}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
