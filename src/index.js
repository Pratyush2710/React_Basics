import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//stateless functional component
//ES6, Nested Components
function Books() {
  return (
    <section className="books">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
//component with var and implicit return
const Book = () => {
  return (
    <article className="book">
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};
const CoverImage = () => (
  <img
    width="200"
    src="https://www.amazon.in/images/I/51useSyby-L._SX323_BO1,204,203,200_.jpg"
    alt="The ORIGIN"
  />
);

//Title with inline CSS defined by {{}}
const authorStyle = {
  letterSpacing: "2px",
  color: "green",
};
const Title = () => <h1 style={{ fontSize: "2rem", color: "red" }}>ORIGIN</h1>;
const Author = () => <p style={authorStyle}> by Dan Brown </p>;

ReactDOM.render(<Books />, document.getElementById("root"));
