"use client";

import { useEffect, useState } from "react";

const ESPECIAL_CHARACTERS = `!@#$%^&*()_+{}:"|<>?,./;'\\[]~\``;

export default function useCounter(textValue: string) {
  const [words, setWords] = useState<number>(0);

  function countWords() {
    const textSplitted = textValue.split(" ");
    const removeEmptySpaces = textSplitted.filter((word) => word !== "");
    console.log(ESPECIAL_CHARACTERS);
    console.log({ textValue });
    setWords(removeEmptySpaces.length);
  }

  useEffect(countWords, [textValue]);

  return { words };
}
