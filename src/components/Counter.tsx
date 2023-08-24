"use client";

import TextArea from "./TextArea";
import useTextInput from "@/hooks/useTextInput";
import useCounter from "@/hooks/useCounter";
import Detail from "./Detail";

export default function Counter() {
  const { textValue, onChangeText } = useTextInput();
  const { words, characters, charactersNoSpaces, paragraphs, sentences } =
    useCounter(textValue);

  return (
    <>
      <div className="w-full flex gap-3 sm:gap-5 px-3 sm:px-5 flex-col md:flex-row">
        <TextArea textValue={textValue} onChangeText={onChangeText} />
        <div className=" bg-gray-700 rounded-xl p-4 flex-shrink md:w-72 md:flex-shrink-0">
          <h4 className="mb-4">Details</h4>
          <ul className=" flex flex-col gap-4">
            <Detail name="Words" data={words} />
            <Detail name="Characters (with spaces)" data={characters} />
            <Detail name="Characters (no spaces)" data={charactersNoSpaces} />
            <Detail name="Paragraphs" data={paragraphs} />
            <Detail name="Sentences" data={sentences} />
          </ul>
        </div>
      </div>
    </>
  );
}
