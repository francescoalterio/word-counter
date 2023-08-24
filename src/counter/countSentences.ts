import { removeSpaces } from "./removeSpaces";

export function countSentences(textValue: string): number {
  const noSpaces = removeSpaces(textValue);
  const textSplitted = noSpaces.split(/[\n\\.!?]/);
  const removeEmptySpaces = textSplitted.filter((x) => x !== "");
  return removeEmptySpaces.length;
}
