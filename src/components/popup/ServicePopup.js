const ServicePopup = ({ data, open, close }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        {data && (
          <div className="description_wrap">
            <div className="service_popup_informations">
              <div className="image">
                {data.image && data.image.url && ( // Check if data.image and data.image.url are defined
                  <img src={data.image.url} alt="image" />
                )}
                <div
                  className="main"
                  data-img-url={data.image && data.image.url} // Set data-img-url attribute
                  style={{
                    backgroundImage: `url(${data.image && data.image.url})`, // Set background image
                  }}
                />
              </div>
              <div className="main_title">
                <h3>{data.name ? data.name : "Title"}</h3> {/* Use data.name instead of data.title */}
                <span className="price">
                  Starts from <span>${data.charge}</span>
                </span>
              </div>
              <div className="descriptions">
                <p>{data.desc}</p> {/* Use data.desc instead of data.dec */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicePopup;
