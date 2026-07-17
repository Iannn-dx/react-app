export default function day4Function(){

  function greet(name) {
        return `Hello, ${name}!`;
    }

    function square (number) {
      return number * number;
    }

  return ( 
      <div>
        <p>{greet("Ian")}</p>
        <p>Square of 8 is {square(8)}</p>
      </div>
  );
}