import { Gallery, Item } from "react-photoswipe-gallery";

export default function ListingOne({ property }) {

  const API_URL = import.meta.env.VITE_NODE_BACKEND_URL;  

  return (
    
    <section className="listing-title-area mt85 md-mt0">
    <div className="container">
      <Gallery>
        <div className="row mb30">
          <div className="col-lg-7 col-xl-8">
            <div className="single_property_title mt30-767">
              <h2>{property?.title}</h2>
              <p>{property?.location.address}</p>
            </div>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="single_property_social_share position-static transform-none">
              <div className="price float-start fn-400">
                <h2>
                  Rs{property?.price}
                </h2>
              </div>

              <div className="spss style2 mt20 text-end tal-400">
                <ul className="mb0">
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
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-share"></span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-printer"></span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* End activity and social sharing */}
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="row">
          <div className="col-sm-7 col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <div className="spls_style_two mb30-520">
                  <Item
                    original={`${API_URL}${property?.imageUrls[0]}`}
                    thumbnail={`${API_URL}${property?.imageUrls[0]}`}
                    width={752}
                    height={450}
                  >
                    {({ ref, open }) => (
                      <div role="button" ref={ref} onClick={open}>
                        <img
                         
                          className="img-fluid w100 cover lds-1"
                          src={`${API_URL}${property?.imageUrls[0]}`}
                          alt="1.jpg"
                        />
                      </div>
                    )}
                  </Item>
                </div>
              </div>
            </div>
          </div>
          {/* End .col-sm-7 .col-lg-8 */}

          <div className="col-sm-5 col-lg-4">
            <div className="row">
              {property?.imageUrls?.map((val, i) => (
                <div className="col-6" key={i}>
                  <div className="spls_style_two img-gallery-box mb24">
                    <Item
                      original={`${API_URL}${val}`}
                      thumbnail={`${API_URL}${val}`}
                      width={752}
                      height={450}
                    >
                      {({ ref, open }) => (
                        <div role="button" ref={ref} onClick={open}>
                          <img
                         
                            className="img-fluid w100 cover"
                            src={`${API_URL}${val}`}
                          />
                        </div>
                      )}
                    </Item>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* End  col-sm-5 col-lg-4 */}
        </div>
        {/* End .row */}
      </Gallery>
    </div>
  </section>
  )
}
