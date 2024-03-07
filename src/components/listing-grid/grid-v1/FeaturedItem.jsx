


import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";

const API_URL = import.meta.env.VITE_NODE_BACKEND_URL; 

const FeaturedItem = () => {
  // const {
  //   keyword,
  //   location,
  //   status,
  //   propertyType,
  //   price,
  //   bathrooms,
  //   bedrooms,
  //   garages,
  //   yearBuilt,
  //   area,
  //   amenities,
  // } = useSelector((state) => state.properties);
  const { isGridOrList } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();

  const { properties } = useSelector((state) => state.allProperties);
  console.log("Properties", properties);

  let content;
  if (properties && Array.isArray(properties)) {
    content =properties?.slice(0, 10)
    // ?.filter(keywordHandler)
    // ?.filter(locationHandler)
    // ?.filter(statusHandler)
    // ?.filter(propertiesHandler)
    // ?.filter(priceHandler)
    // ?.filter(bathroomHandler)
    // ?.filter(bedroomHandler)
    // ?.filter(garagesHandler)
    // ?.filter(builtYearsHandler)
    // ?.filter(areaHandler)
    // ?.filter(advanceHandler)
    // ?.sort(statusTypeHandler)
    // ?.filter(featuredHandler)
    .map((item) => (
      <div
        className={`${
          isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
        } `}
        key={item.id}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex align-items-center" : undefined
          }`}
        >
          <div className="thumb">
            <img
            
              className="img-whp w-100 h-100 cover"
              src={`${API_URL}${item.imageUrls[0]}`}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">Featured</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {item.featured}
                  </a>
                </li>
              </ul>
              <ul className="icon mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-transfer-1"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul>

              <Link
                to={`/listing-details-v1/${item.id}`}
                className="fp_price"
              >
                ${item.price}
                <small>/mo</small>
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item.type}</p>
              <h4>
                <Link to={`/listing-details-v1/${item.id}`}>
                  {item.title}
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.location.country}
              </p>

              {/* <ul className="prop_details mb0">
                {item.itemDetails.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.name}: {val.number}
                    </a>
                  </li>
                ))}
              </ul> */}
            </div>
            {/* End .tc_content */}            
          </div> 
        </div>
      </div>
    ));
  }

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content.length));
  }, [dispatch, content]);

  return <>{content}</>;
};

export default FeaturedItem;
