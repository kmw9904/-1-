export default function CustomDelimiter(text, delimiter) {
  const customLeft = delimiter.splice(0, 2).join("");
  const customRight = delimiter.splice(1, 1);

  if (customLeft === "//" && customRight[0] === "\n") {
    const customDelimiter = delimiter.splice(0, 1);
    delimiter.push(customDelimiter);
  }
  else {
    
  }

  return
}
