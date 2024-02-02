const PropertyItem = ({property}) => {
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <a href="#">Apartment</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Beds: {property?.itemDetails[0].number}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Baths: {property?.itemDetails[1].number}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Sq Ft: {property?.itemDetails[2].number}</a>
      </li>
    </ul>
  );
};

export default PropertyItem;
