export const cleanAllSpecialCharacters = (text: string) => {
  const textWithoutSpecialChars = text.replace(/[^a-zA-Z0-9]/g, "");
  const textWithoutSpaces = textWithoutSpecialChars.replace(/\s/g, "");
  return textWithoutSpaces;
};
