import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//stateless functional component
//ES6, Nested Components

function People() {
  const friends = [
    { name: "Pratyush", job: "developer", age: 22, company: "Jio" },
    { name: "Shatakshi", job: "developer", age: 22, company: "Jio" },
    { name: "Himanshi", job: "developer", age: 22, company: "Jio" },
  ];

  return (
    <section>
      <Person person={friends[0]}>
        <p>Some info abiut me</p>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

//props (Properties) parameter passesd
//destructured props
const Person = ({ children, person: { name, job, age, company } }) => {
  // const { name, job, age, company } = props.person;
  //props.person - Keyword
  return (
    <article>
      <h1>{name}</h1>
      {children}
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};

ReactDOM.render(<People />, document.getElementById("root"));
