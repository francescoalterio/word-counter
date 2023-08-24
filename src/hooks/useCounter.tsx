"use client";

import { countCharacters } from "@/counter/countCharacters";
import { countParagraphs } from "@/counter/countParagraphs";
import { countSentences } from "@/counter/countSentences";
import { countWords } from "@/counter/countWords";
import { useEffect, useState } from "react";

export default function useCounter(textValue: string) {
  const [words, setWords] = useState<number>(0);
  const [characters, setCharacters] = useState<number>(0);
  const [charactersNoSpaces, seCharactersNoSpaces] = useState<number>(0);
  const [paragraphs, setParagraphs] = useState<number>(0);
  const [sentences, setSentences] = useState<number>(0);

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
