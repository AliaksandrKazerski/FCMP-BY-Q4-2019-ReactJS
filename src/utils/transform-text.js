export function getTextToUpperCase(text) {
  return text.toUpperCase();
};

export function getTextToLowerCase(text) {
  return text.toLowerCase();
}

export function getSubstringFourSimbols(text) {
  if (text.length > 4) {
    return text.substring(0, 4);
  }
  return text;
}

export function getTextFromArray(text) {
  if (Array.isArray(text)) {
    text.length = 3;
    return text.join(' & ');
  }
  return text;
}
