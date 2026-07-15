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
        </div>
    );
}