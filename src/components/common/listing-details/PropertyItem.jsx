// eslint-disable-next-line react/prop-types
const PropertyItem = ({ property }) => {
  console.log(property)
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <a href="#">{property.type}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Beds: {property.bedrooms}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Baths: {property?.bathrooms}</a>
      </li>
    </ul>
  );
};

export default PropertyItem;
