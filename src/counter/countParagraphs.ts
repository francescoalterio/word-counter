import { removeSpaces } from "./removeSpaces";

export function countParagraphs(textValue: string): number {
  const noSpaces = removeSpaces(textValue);
  const textSplitted = noSpaces.split(/\r?\n/);
  const removeEmptySpaces = textSplitted.filter((x) => x !== "");
  return removeEmptySpaces.length;
}
