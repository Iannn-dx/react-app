export default function Day1VariablesFunctions() {
    // const name = "John";
    let age = 21;


     const message = `Hello, my name is ${name} and I'm ${age} years old`;
     const sentence = `Hello, I'm learning react`;

     const greeting = () =>{
        return "Welcome to react!";
     }

     const introduce = (name) => {
        return `Hello I'm ${name} and currently learning react`;
     }

     const add = (a, b) =>{

        return `${a} + ${b} = ${a + b}`;
     }

     const multiply = (x, y) =>{
        return `${x} x ${y} = ${x * y}`;
     }

     const fullName = () =>{
        
     }

    return(
        <div>
            <h1>Variables</h1>

            {/* <p>
                {message}
            </p> */}
            <p>{message}</p>
            <p>{sentence}</p>
            {/* <p>Name: {name}</p>
            <p>Age: {age}</p> */}

            <hr />
            {/* arrow functions */}

            <p>{greeting()}</p>
            <p>{introduce("ian")}</p>
            <p>add: {add(5,3)}</p>
            <p>multiply: {multiply(5,3)}</p>
        </div>
        

       
    )

}