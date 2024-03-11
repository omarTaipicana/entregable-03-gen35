import "../styles/HasError.css";

const HasError = ({ hasError, setHasError }) => {
  const urlImage = `https://http.cat/${hasError?.response.status}`;
  return (
    <section className="app__error">
      <article className="error__card">
        <h3 className="error__title">
          ❌ Hey! you must provide an id from 1 to 126
        </h3>
        <h4 className="error__message">{hasError?.message}</h4>{" "}
        <img className="error__image" src={urlImage} alt="" />
        <button className="error__btn" onClick={()=> setHasError()}>Try Again</button>
      </article>
    </section>
  );
};

export default HasError;
