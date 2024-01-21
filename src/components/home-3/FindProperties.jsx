import { Link } from "react-router-dom";
import findProperties from "../../data/findProperties";


const FindProperties = () => {
  return (
    <>
      {findProperties.slice(9, 14).map((item) => (
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl" key={item.id}>
          <Link to="/listing-grid-v3" className="properti_city d-block">
            <div className="thumb">
              <img
                
                className="img-fluid w100 h-100 cover"
                src={item.img}
                alt="pc1.jpg"
              />
            </div>
            <div className="overlay">
              <div className="details">
                <h4>{item.name}</h4>
                <p>{item.number} Properties</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
