const PropertyDetails = ({ property }) => {
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property ID : <span>{property._id.slice(0, 10)}</span>
            </p>
          </li>
          <li>
            <p>
              Price : <span>{property.price}</span>
            </p>
          </li>
          <li>
            <p>
              Property Size : <span>{property?.area || 'Not given'}</span>
            </p>
          </li>          
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Bedrooms : <span>{property.bedrooms}</span>
            </p>
          </li>
          <li>
            <p>
              Bathrooms : <span>{property.bathrooms}</span>
            </p>
          </li>          
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property Type : <span>{property.type}</span>
            </p>
          </li>
          <li>
            <p>
              Property Status : <span>For Sale</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
