import { useState, useEffect } from "react";
// import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        // ...
      })
      .then((actualData) => {
        setData(actualData);
        // setError(null);
      })
      .catch((err) => {
        // setError(err.message);
        setData(null);
      });
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, [url]);

  return data;
};

export default useFetch;
