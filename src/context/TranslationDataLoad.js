import React from "react";
import TranslationContext from "./translation-context";

const TranslationDataLoad = (props) => {
  return (
    <TranslationContext.Provider
      value={{ message: "test message from app context" }}
    >
      {props.children}
    </TranslationContext.Provider>
  );
};

export default TranslationDataLoad;
