import "../styles/Residents.css"
import React, { useEffect } from "react";
import useResponse from "../hooks/useResponse";

const Residents = ({ url }) => {
  const [character, getApi, hasError, isLoading] = useResponse(url);
  useEffect(() => {
    getApi();
  }, [url]);
  return (
    <article className="resident">
      <header className="resident__header">
        <img className="resident__image" src={character?.image} alt="" />
        <div className="resident__status">
          <div className={`status__circle ${character?.status}`}></div>
          <div className="status__value">{character?.status}</div>
        </div>
      </header>
      <section className="resident__body">
        <h3 className="resident__name">{character?.name}</h3>
        <hr className="resident__hr"/>
        <ul className="resident__list">
          <li className="resident__item">
            <span className="resident__label">Specie: </span>
            <span className="resident__value">{character?.species}</span>
          </li>
          <li className="resident__item">
            <span className="resident__label">Origin: </span>
            <span className="resident__value">{character?.origin.name}</span>
          </li>
          <li className="resident__item">
            <span className="resident__label">Eppisodes where appear: </span>
            <span className="resident__value">{character?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Residents;
