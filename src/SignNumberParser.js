export default function SignNumberParser(text, delimiters) {
  // 먼저 숫자는 문자열을 숫자로 변환하기

  const ln = text.length;
  const signChangeText = [];
  if (delimiters.includes("-")) {
    for (let i = 0; i < ln; i++) {
      if (text[i] === "-" && text[i + 1] === "-" && +text[i + 2] >= 0) {
        signChangeText.push(text[i]);

        // 음수 부호로 만든 text
        let minusText = text[i + 1] + text[i + 2];
        let afterMinus = 0;
        // 뒤에 더 숫자가 있는지?
        while (i + 3 + afterMinus < ln && +text[i + 3 + afterMinus] >= 0) {
          minusText += text[i + 3 + afterMinus];
          afterMinus += 1;
        }
        signChangeText.push(minusText);
        i += 2 + afterMinus;
      } else {
        signChangeText.push(text[i]);
      }
    }
  } else {
    for (let i = 0; i < ln; i++) {
      if (text[i] === "-" && +text[i + 1] >= 0) {
        // 음수 부호로 만든 text
        let minusText = text[i] + text[i + 1];
        let afterMinus = 0;
        // 뒤에 더 숫자가 있는지?
        while (i + 2 + afterMinus < ln && +text[i + 2 + afterMinus] >= 0) {
          minusText += text[i + 2 + afterMinus];
          afterMinus += 1;
        }
        signChangeText.push(minusText);
        i += 1 + afterMinus;
      } else {
        signChangeText.push(text[i]);
      }
    }
  }

  return { signChangeText };
}

console.log(SignNumberParser("1--21n3".split(""), [";", ",", "n", "-"]));
