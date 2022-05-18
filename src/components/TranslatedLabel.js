import React, { useContext } from "react";
import TranslationContext from "../context/translation-context";

export function TranslatedLabel(key) {
  const { message, postApiResponse } = useContext(TranslationContext);
  console.log("post api response", postApiResponse);

  let title = message;
  if (postApiResponse != null) {
    postApiResponse.map((info) => {
      title = info.title;
    });
  }
  return <>{key + " Message: " + title} </>;
}
