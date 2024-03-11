import "../styles/LocationInfo.css"

const LocationInfo = ({ response }) => {
  return (
    <article className="location">
      <h2 className="location__name">{response?.name}</h2>
      <ul className="location__list">
        <li className="location__item">
          <span className="location__label">Type: </span>
          <span className="location__value">{response?.type}</span>
        </li>
        <li className="location__item">
          <span className="location__label">Dimension: </span>
          <span className="location__value">{response?.dimension}</span>
        </li>
        <li className="location__item">
          <span className="location__label">Population: </span>
          <span className="location__value">{response?.residents.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
