export default function Sum(text) {
  let result = 0;
  for (let i = 0; i < text.length; i += 2) {
    const num = +text[i];

    if (num === NaN) {
    } else {
      result += num;
    }
  }

  return result;
}
