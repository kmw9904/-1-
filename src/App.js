import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    const delimiter = [",", ";"];

    if (+input[0] === NaN) {
      // 커스텀구분자인지 확인
    }
    
    Console.print(`결과 : ${input}`);
  }
}

export default App;
