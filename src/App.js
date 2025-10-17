import { Console } from "@woowacourse/mission-utils";
import CustomDelimiter from "./CustomDelimiter.js";
import SignNumberParser from "./SignNumberParser.js";
import ConatinsDelimiter from "./SplitByDelimiter.js";
import Sum from "./Sum.js";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    const { text, delimiter } = CustomDelimiter(input, [",", ";"]);

    // 숫자가 음수인지 확인
    SignNumberParser(text);

    // 구분자로 구성되어 있는지 확인
    const isConatins = ConatinsDelimiter(text, delimiter);

    if (!isConatins) {
      throw Error("구분자 오류");
    }

    // 여태까지 오류가 없다면 더하기
    const result = Sum(text);

    Console.print(`결과 : ${result}`);
  }
}

export default App;
