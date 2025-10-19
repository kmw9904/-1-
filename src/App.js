import { Console } from "@woowacourse/mission-utils";
import CustomDelimiter from "./CustomDelimiter.js";
import SignNumberParser from "./SignNumberParser.js";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    const { text, delimiters } = CustomDelimiter(input.replace(/\\n/g, "\n"), [
      ",",
      ";",
    ]);

    const { signChangeText } = SignNumberParser(text, delimiters);

    Console.print(`결과 : ${signChangeText}`);
  }
}

export default App;
