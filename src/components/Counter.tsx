"use client";

import TextArea from "./TextArea";
import useTextInput from "@/hooks/useTextInput";
import useCounter from "@/hooks/useCounter";
import Detail from "./Detail";

export default function Counter() {
  const { textValue, onChangeText } = useTextInput();
  const { words } = useCounter(textValue);

  return (
    <>
      <div className="w-full flex gap-5">
        <TextArea textValue={textValue} onChangeText={onChangeText} />
        <div className=" bg-gray-700 rounded-xl p-4 w-72">
          <h4 className="mb-4">Details</h4>
          <ul className=" flex flex-col gap-4">
            <Detail name="Words" data={words} />
            <Detail name="Characters (with spaces)" data={words} />
            <Detail name="Characters (no spaces)" data={words} />
            <Detail name="Paragraphs" data={words} />
            <Detail name="Sentences" data={words} />
          </ul>
        </div>
      </div>
    </>
  );
}
