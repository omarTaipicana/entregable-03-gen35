import { useState } from "react";
import axios from "axios";

const useResponse = (url) => {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState();
  const getApi = () => {
    setIsLoading(true);
    setHasError();
    axios
      .get(url)
      .then((res) => setResponse(res.data))
      .finally(() => setIsLoading(false))
      .catch((err) => {
        setHasError(err);
        console.log(err);
      });
  };

  return [response, getApi, hasError, isLoading, setHasError];
};

export default useResponse;
