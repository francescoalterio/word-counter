"use client";

interface Props {
  name: string;
  data: number;
}

export default function Detail({ name, data }: Props) {
  return (
    <li className=" flex justify-between items-center text-xs sm:text-sm bg-gray-800 rounded-xl p-2">
      <p>{name}</p>
      <p className=" bg-gray-700 rounded-full px-3 py-1">{data}</p>
    </li>
  );
}
