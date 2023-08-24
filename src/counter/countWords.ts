const ESPECIAL_CHARACTERS = `!@#$%^&*()_+{}:"|<>?,./;'\\[]~\``;

export function countWords(textValue: string): number {
  const textSplitted = textValue.split(" ");
  const removeEmptySpaces = textSplitted.filter((word) => word !== "");
  const removeEspecialCharacters = removeEmptySpaces.filter(
    (word) => !ESPECIAL_CHARACTERS.includes(word)
  );
  return removeEspecialCharacters.length;
}
