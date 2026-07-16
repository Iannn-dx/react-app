export default function Day2Arrays() {

    const fruits = [
        "Apple",
        "Banana",
        "Orange",
        "Mango"
    ];

    const users = [
      {
        id: 1,
        name: "ian",
        age: 21
      },
      {
        id: 2,
        name: "cris",
        age: 22
      },
    ];

    
      const numbers = [1,2,3,22,5,6,7,8,16,10];

      const evenNum = () => {
        return numbers.filter(numbers => numbers % 2 == 0);
      }

      const words = [
        {
          id:1,
          word: "hello"
        },
        {
          id:2,
          word: "world"
        },
        {
          id:3,
          word: "kind"
        },
        {
          id:4,
          word: "polite"
        },
        {
          id:5,
          word: "kind"
        },
      ];

      const lang = [
        {
          id: 1,
          language: "python"
        },
        {
          id: 2,
          language: "Javascript"
        },
        {
          id: 3,
          language: "PHP"
        },
        {
          id: 4,
          language: "Java"
        },
        {
          id: 5,
          language: "Kotlin"
        },
        {
          id: 6,
          language: "Typescript"
        },
      ];
      // const sample = () => ()

      // const language = () => {
      //   return lang.includes(lang => lang.language === "python");
      // }

      // array of objects uses some, find, filter while includes return a value like bool

    // map
    // users.map(users => (
    //   <p key={users.id}>{users.name}</p>
    // ))

    return (
        <div>
          <h1>Arrays</h1>
          <p>{fruits[0]}</p>
          {/* <p>{users[0].id}</p>
           <p>{users[0].name}</p> */}
           {users.map(user => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                </div>
            ))}

           <p>{evenNum()}</p> 

           <p>{evenNum().map(numbers => (
            <p key={numbers}>{numbers}</p>
           ))}</p>

           <div>
            {words.filter(words => words.word == "kind").map(words => (
              <p key={words.id}>{words.word}</p>
            ))}
           </div>

           <div>
            <p>{lang.includes({language:"python"})}</p>
           </div>
        </div>
    );
}