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

    return (
        <div>
          <h1>Arrays</h1>
          <p>{fruits[0]}</p>
          <p>{users[0].id}</p>
           <p>{users[0].name}</p>
        </div>
    );
}