import "./App.css";
import { useEffect, useState } from "react";
import useResponse from "./hooks/useResponse";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./componets/LocationInfo";
import Residents from "./componets/Residents";
import FormSearch from "./componets/FormSearch";
import HasError from "./componets/HasError";
import IsLoading from "./componets/IsLoading";

function App() {
  const randomNumber = getRandomNumber(126);
  const [inputValue, setInputValue] = useState(randomNumber);
  const url = `https://rickandmortyapi.com/api/location/${
    inputValue || randomNumber
  }`;
  const [response, getApi, hasError, isLoading, setHasError] = useResponse(url);

  useEffect(() => {
    getApi();
  }, [inputValue]);
  return (
    <div className="app">
      {isLoading ? (
        <IsLoading />
      ) : (
        <>
          <header className="header">
            <img className="header__image" src="/fondo/fondo1.jpg" alt="" />
          </header>
          <FormSearch setInputValue={setInputValue} />
          {hasError && (
            <HasError hasError={hasError} setHasError={setHasError} />
          )}
          <LocationInfo response={response} />
          <div className="container-resident">
            {response?.residents.map((resident, i) => (
              <Residents key={i} url={resident} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
