export default function Sum(text, delimiters) {
  // 먼저 올바른 구분자들만 이루어졌는지 확인
  let isTrue = true;
  let result = 0;

  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      result += +text[i];
    } else {
      if (!delimiters.includes(text[i])) {
        isTrue = false;
        break;
      }
    }
  }

  if (isTrue) {
    return { result };
  } else {
    throw new Error("[ERROR] 잘못된 구분자를 입력하셨습니다.");
  }
}
