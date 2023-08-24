"use client";

import { useEffect, useState } from "react";

const ESPECIAL_CHARACTERS = `!@#$%^&*()_+{}:"|<>?,./;'\\[]~\``;

export default function useCounter(textValue: string) {
  const [words, setWords] = useState<number>(0);
  const [characters, setCharacters] = useState<number>(0);
  const [charactersNoSpaces, seCharactersNoSpaces] = useState<number>(0);
  const [paragraphs, setParagraphs] = useState<number>(0);
  const [sentences, setSentences] = useState<number>(0);

  function countWords(textValue: string): number {
    const textSplitted = textValue.split(" ");
    const removeEmptySpaces = textSplitted.filter((word) => word !== "");
    return removeEmptySpaces.length;
  }

  function countCharacters(textValue: string): {
    characterCounter: number;
    charactersNoSpacesCounter: number;
  } {
    const noSpaces = textValue
      .split("")
      .filter((x) => x !== " ")
      .join("");
    return {
      characterCounter: textValue.length,
      charactersNoSpacesCounter: noSpaces.length,
    };
  }

  function countParagraphs(textValue: string): number {
    const removeSpaces = textValue
      .split("")
      .filter((x) => x !== " ")
      .join("");
    const textSplitted = removeSpaces.split(/\r?\n/);
    const removeEmptySpaces = textSplitted.filter((x) => x !== "");
    return removeEmptySpaces.length;
  }

  function countSentences(textValue: string): number {
    const removeSpaces = textValue
      .split("")
      .filter((x) => x !== " ")
      .join("");
    const textSplitted = removeSpaces.split(/[\n\\.!?]/);
    const removeEmptySpaces = textSplitted.filter((x) => x !== "");
    return removeEmptySpaces.length;
  }

  useEffect(() => {
    const wordCounter = countWords(textValue);
    const { characterCounter, charactersNoSpacesCounter } =
      countCharacters(textValue);
    const paragraphsCounter = countParagraphs(textValue);
    const sentencesCounter = countSentences(textValue);

    setWords(wordCounter);
    setCharacters(characterCounter);
    seCharactersNoSpaces(charactersNoSpacesCounter);
    setParagraphs(paragraphsCounter);
    setSentences(sentencesCounter);
  }, [textValue]);

  return { words, characters, charactersNoSpaces, paragraphs, sentences };
}
