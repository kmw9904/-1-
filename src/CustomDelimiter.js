export default function CustomDelimiter(input, delimiters) {
  if (input[0] + input[1] !== "//") {
    if (+input[0] === NaN) {
      throw new Error("커스텀 구분자 형식 오류입니다.");
    } else {
      return { text: input, delimiters };
    }
  }

  const nl = input.indexOf("\n");
  if (nl === -1) throw new Error("커스텀 구분자 형식 오류");

  const delimiter = input.slice(2, nl);
  delimiters.push(delimiter);
  const text = input.slice(nl + 1);

  return { text, delimiters };
}
