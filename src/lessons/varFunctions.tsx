export default function Day1VariablesFunctions() {
    const name = "John";
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

     const fullName = (firstName, lastName) =>{
        return `${firstName} ${lastName}`;
     }

     const ageNextYear = (age) =>{
        return age + 1;
     }

     const adult = (age) => {
        if(age >= 20){
            return `Your age is ${age} so you're adult`
        } else{
            return `Your age is ${age} so you're not a adult`
        }
     }

     const rectangleArea = () =>{
        let width = 5;
        let height = 8;
        let area = width * height;

        return `
        width: ${width}
        height: ${height}
        area: ${area}`
     }

     const circle = (radius) =>{
        const area = Math.PI * radius ** 2;

        return `A circle with radius of ${radius} has an area of ${area}`;        
     }

     const EvenOdd = (number) => {
       if(number % 2 == 0 ){
         return `even`;
       } else{
         return `odd`;
       }
     }

     const divide = (a,b) => a / b;

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
            <p>My full name is {fullName("Ian Khristopher", "Teves")} and my age next year is {ageNextYear(21)}</p>
            <p>{adult(19)}</p>
            <hr />
            <pre>Rectangle Area: {rectangleArea()}</pre>
            <p>{circle(7)}</p>

            <p>Even or Odd: {EvenOdd(78)}</p>
            <p>Divide: {divide(12,2)}</p>
        </div>
        

       
    )

}