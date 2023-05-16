export const splitTextWithKeyword = (text: string, keyword: string) => {
  const splitKey = '@#$%^';
  return text
    .replaceAll(keyword, `${splitKey}${keyword}${splitKey}`)
    .split(splitKey);
};
