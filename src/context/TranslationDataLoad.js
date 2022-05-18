import React, { useEffect, useState } from "react";
import TranslationContext from "./translation-context";
const axios = require("axios");
const TranslationDataLoad = (props) => {
  const [customMessage, setMessage] = useState({});
  const [postApiResponse, setPostApiResponse] = useState(undefined);

  useEffect(() => {
    loadData();
    //console.log("load Data");
  }, []);

  const loadData = () => {
    //console.log("load Data");
    debugger;
    setMessage("This message is set on load data function");

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        setPostApiResponse(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <TranslationContext.Provider
      value={{ message: customMessage, postApiResponse }}
    >
      {props.children}
    </TranslationContext.Provider>
  );
};

export default TranslationDataLoad;
