import { Console } from "@woowacourse/mission-utils";
import CustomDelimiter from "./CustomDelimiter.js";
import SignNumberParser from "./SignNumberParser.js";
import Sum from "./Sum.js";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    // 커스텀 구분자가 있는지 확인
    const { text, delimiters } = CustomDelimiter(input.replace(/\\n/g, "\n"), [
      ",",
      ";",
    ]);

    // 음수 처리
    // 문제를 제대로 읽자....
    // const { signChangeText } = SignNumberParser(text, delimiters);

    // 올바른 구분자 인지 확인 후 결과값 나타내기
    const { result } = Sum(text, delimiters);

    Console.print(`결과 : ${result}`);
  }
}

export default App;
