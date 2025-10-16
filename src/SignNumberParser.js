export default function SignNumberParser(text) {
  const numberParser = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "-") {
      numberParser.push(text[i] + text[i + 1]);
      i++;
    } else {
      numberParser.push(text[i]);
    }
  }
  return numberParser;
}
