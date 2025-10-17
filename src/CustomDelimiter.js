export default function CustomDelimiter(input, delimiters) {
  if (input.startsWith("//")) {
    return { body: input, delimiters };
  }

  const nl = input.indexOf("\n");
  if (nl === -1) throw new Error("커스텀 구분자 형식 오류");

  const delimiter = input.slice(2, nl);
  delimiters.push(delimiter);
  const text = input.slice(nl + 1);

  return { text, delimiter };
}
