export default function day3onject(){

  const user = {
        id: 1,
        name: "Ian",
        age: 21,
        course: "BSIT"
    };

    const {name, age, course} = user;

    const product = {
      prod: "Laptop",
      price: 42500,
      brand: "MSI"
    };

    const {prod, price, brand} = product;

    const {
      name: username
    } = user;

    const student = {
      nameF: "John",
      section: "A"
    };

    const {nameF, section} = student;

    const {
      nameF: studentName
    } = student;


    // nested object
    const profile = {

    name: "Ian",

    address: {
        city: "Tuguegarao",
        country: "Philippines"
    }
  };

  const employee = {
    fname: "ian",

    job:{
      title: "Web Developer",
      company: "Tech"
    }
  };

  const profile1 = {

    firstName:"Ian",
    lastName:"Teves",
    age:21,

    skills:[
        "Laravel",
        " React",
        " JavaScript"
    ],

    address:{
        city:"Tuguegarao",
        country:"Philippines"
    }
};

  const introduceUser = ({name1, age1, role1}) => {

    return `
    Hello ${name1}.
    Age: ${age1}
    Role: ${role1}
    `;

};

  // merge and spread
  const fruits = ["Apple", "Banana"];

  const vegetables = [
      "Carrot",
      "Potato"
  ];

  const edible = [fruits, vegetables];

  return (
    <div>
      <h1>Objects, Destructuring & Spread Operator</h1>

      <p>{user["name"]}</p>
      <p>{username}</p>
      <p>{age}</p>
      <p>{course}</p>

      <div>
        <p>{prod}</p>
        <p>{price}</p>
        <p>{brand}</p>
        <p>{prod}</p>
      </div>

      <div>
        <p>{studentName}</p>
        <p>{section}</p>
      </div>

      <div>{profile.address.country}</div>

      <hr />

      <div>
        <p>First name: {employee.fname}</p>
        <p>Job: {employee.job.title}</p>
        <p>Company: {employee.job.company}</p>
      </div>

      <hr />

      <div>
        <p>First name: {profile1.firstName}</p>
        <p>Last name: {profile1.lastName}</p>
        <p>Age: {profile1.age}</p>
        <p>Skills: {profile1.skills}</p>
        <p>Location: {profile1.address.city}, {profile1.address.country}</p>

        {/* map */}
        <div>
          <p>Skills</p>
          {profile1.skills.map(profile1 => (
            <div>
              <p>{profile1}</p>
            </div>
          ))}
        </div>
       
        <div>
          <p>{introduceUser({
            name1: "Ian",
            age1: 21,
            role1: "Web Developer"
          })}</p>
        </div>

        <div>
          <p>{edible}</p>
        </div>
      </div>
    </div>
  )
}