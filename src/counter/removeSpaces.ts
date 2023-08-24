export function removeSpaces(textValue: string): string {
  return textValue
    .split("")
    .filter((x) => x !== " ")
    .join("");
}
