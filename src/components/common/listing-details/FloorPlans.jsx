

const FloorPlans = ({property}) => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="card floor_plan">
        <div id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <ul className="mb0 d-flex align-items-cener flex-wrap">
                <li className="d-inline-flex list-inline-item">Ground Floor</li>
                <li className="d-inline-flex list-inline-item">
                  <p>Size:</p> <span>{property.size1}</span>
                </li>
                <li className="d-inline-flex list-inline-item">
                  <p>Rooms:</p> <span>{property.Rooms2}</span>
                </li>
                <li className="d-inline-flex list-inline-item">
                  <p>Baths:</p> <span>{property.Baths2}</span>
                </li>
                {/*<li className="d-inline-flex list-inline-item">
                  <p>Price:</p> <span>$1489</span>
  </li>*/}
              </ul>
            </button>
          </h2>
        </div>
        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="card-body text-center">
            <img
            
              className="img-fluid w-100 h-100 cover"
              //src="/assets/images/resource/floor_plan.png"
              src={property.plan_src1}
              alt="floor_plan.png"
            />
            <p>
            {property.plan_paragraph1}
            </p>
          </div>
        </div>
      </div>
      <div className="card floor_plan">
        <div className=" active" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <ul className="mb0 d-flex align-items-cener flex-wrap">
                <li className="d-inline-flex list-inline-item">First Floor</li>
                <li className="d-inline-flex list-inline-item">
                  <p>Size:</p> <span>{property.Size2}</span>
                </li>
                <li className="d-inline-flex list-inline-item">
                  <p>Rooms:</p> <span>{property.Rooms2}</span>
                </li>
                <li className="d-inline-flex list-inline-item">
                  <p>Baths:</p> <span>{property.Baths2}</span>
                </li>
                {/*<li className="d-inline-flex list-inline-item">
                  <p>Price:</p> <span>$1489</span>
</li>*/}
              </ul>
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          className="collapse show"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="card-body text-center">
            <img
             
              className="img-fluid"
              //src="/assets/images/resource/floor_plan2.png"
              src={property.plan_src2}
              alt="floor_plan.png"
            />
            <p>
            {property.plan_paragraph2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;
