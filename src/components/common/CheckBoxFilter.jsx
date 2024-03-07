// eslint-disable-next-line react/prop-types
const CheckBoxFilter = ({ formDetails, setFormDetails }) => {
  if (!formDetails) return null;
  
  const handleChange = (e) => {
    const { name, checked  } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: checked,
    }))
  }

  return (
    <>
      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck1"
                name="air"
                onChange={handleChange}
                checked={!!formDetails?.air}
              />
              <label className="form-check-label" htmlFor="customCheck1">
                Air Conditioning
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck2"
                name="lawn"
                onChange={handleChange}
                checked={formDetails.lawn || false}
              />
              <label className="form-check-label" htmlFor="customCheck2">
                Lawn
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck3"
                name="swimming"
                onChange={handleChange}
                checked={formDetails.swimming || false}
              />
              <label className="form-check-label" htmlFor="customCheck3">
                Swimming Pool
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">          
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck8"
                name="outdoor"
                onChange={handleChange}
                checked={formDetails.outdoor || false}
              />
              <label className="form-check-label" htmlFor="customCheck8">
                Outdoor Shower
              </label>
            </div>
          </li>

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck10"
                name="gym"
                onChange={handleChange}
                checked={formDetails.gym || false}
              />
              <label className="form-check-label" htmlFor="customCheck10">
                Gym
              </label>
            </div>
          </li>
          {/* End li */}
         

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck12"
                name="wifi"
                onChange={handleChange}
                checked={formDetails.wifi || false}
              />
              <label className="form-check-label" htmlFor="customCheck12">
                WiFi
              </label>
            </div>
          </li>

        </ul>
      </div>
      {/* End .col */}

      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
              <div className="form-check custom-checkbox">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="customCheck13"
                  name="laundry"
                  onChange={handleChange}
                  checked={formDetails.laundry || false}
                />
                <label className="form-check-label" htmlFor="customCheck13">
                  Laundry
                </label>
              </div>
            </li>          
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}
    </>
  );
};

export default CheckBoxFilter;
