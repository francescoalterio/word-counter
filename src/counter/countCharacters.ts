import { removeSpaces } from "./removeSpaces";

interface CharacterCounter {
  characterCounter: number;
  charactersNoSpacesCounter: number;
}

export function countCharacters(textValue: string): CharacterCounter {
  const noSpaces = removeSpaces(textValue);
  return {
    characterCounter: textValue.length,
    charactersNoSpacesCounter: noSpaces.length,
  };
}
