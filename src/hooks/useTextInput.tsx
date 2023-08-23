"use client";
import { useState } from "react";

export default function useTextInput() {
  const [text, setText] = useState<string>("");

  function onChangeText(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return { textValue: text, onChangeText };
}
