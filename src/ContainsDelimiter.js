export default function ContainsDelimiter(text, delimiter) {
  let isValid = true;
  for (let i = 1; i < text.length; i += 2) {
    if (!delimiter.contains(text[i])) {
      isValid = false;
    }
  }

  return isValid;
}
