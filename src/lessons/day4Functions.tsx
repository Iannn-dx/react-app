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

  return ( 
      <div>
        <p>{greet("Ian")}</p>
        <p>Square of 8 is {square(8)}</p>
        <p>{add(8,3)}</p>

        <div>
          <hr />

        </div>
      </div>
  );
}