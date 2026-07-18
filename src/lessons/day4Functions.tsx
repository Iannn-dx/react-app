export default function day4Function(){

  function greet(name) {
        return `Hello, ${name}!`;
    }

    function square (number) {
      return number * number;
    }

    const students = [
    {
        id:1,
        name:"Ian",
        score:95
    },
    {
        id:2,
        name:"John",
        score:75
    },
    {
        id:3,
        name:"Alice",
        score:82
    }
];

  const add = function (a,b) {
    return `${a} + ${b} = ${a + b}`;
  }

  const multiply = (a,b) => `${a} x ${b} = ${a*b}`;

  const subtract = (a,b) => {
    return `${a} - ${b} = ${a - b}`
  }

  const numbers = [1,2,3];

  const doubled = numbers.map(number => number * 2);

  // callback function
    // const greet = (name) => {
    //   return `Hello ${name}`;
    // };

    const printMessage = (callback) => {
      return callback("Ian");
    };

    const sayGoodbye = (name) => {
      return `Bye for now`;
    }

    const newNumbers = [10, 20, 30];

    const tripled = newNumbers.map(newNumbers => newNumbers * 3);

    // functions returning functions
    const greetings = () => {
      return () =>{
        return `Hello world`;
      };
    };

    const multiplier = (a) => {
      return (c) => `${a * c}`;
    }

  return ( 
      <div>
        <p>{greet("Ian")}</p>
        <p>Square of 8 is {square(8)}</p>
        <p>{add(8,3)}</p>
        <p>{multiply(8,3)}</p>
        <p>{subtract(3,8)}</p>
        <p>{doubled}</p>
        <p>{tripled}</p>

        <div>
          <hr />
          {/* callback function */}
          <p>{printMessage(sayGoodbye)} {printMessage(greet)}</p>
          <p>{greetings()()}</p>
          <p>{multiplier(5)(10)}</p>
        </div>
      </div>
  );
}