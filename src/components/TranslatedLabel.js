import React, { useContext } from "react";
import TranslationContext from "../context/translation-context";

export function TranslatedLabel(key) {
  const { message } = useContext(TranslationContext);

  return <>{key + " Message: " + message}</>;
}
