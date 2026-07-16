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
    </div>
  )
}