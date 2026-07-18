import { add, subtract, multiply, divide } from "../utils/math";
import welcome, {goodluck} from "../utils/messages";

export default function day5 () {


  return(
    <div>
      <h1>
        Modules & Async JavaScript
      </h1>
        <p>{add(10, 5)}</p>
        <p>{subtract(20, 8)}</p>
        <p>{multiply(4, 6)}</p>
        <p>{divide(300,60)}</p>

        <hr />
          <p>{welcome()}</p><p>{goodluck()}</p>
    </div>
  );
}