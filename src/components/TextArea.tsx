"use client";

interface Props {
  textValue: string;
  onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({ textValue, onChangeText }: Props) {
  return (
    <textarea
      name=""
      placeholder="Text here"
      onChange={onChangeText}
      value={textValue}
      className=" flex-1 resize-none min-h-[300px] text-xs sm:text-sm md:text-base md:min-h-0 bg-gray-700 rounded-xl p-4 outline-none"
    ></textarea>
  );
}
