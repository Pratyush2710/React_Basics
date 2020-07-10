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
    src="https://images-eu.ssl-images-amazon.com/images/I/814L%2Bvq01mL._AC_UL200_SR200,200_.jpg"
    alt="IKIGAI"
  />
);

//Title with inline CSS defined by {{}}
const authorStyle = {
  letterSpacing: "2px",
  color: "green",
};
const Title = () => <h1 style={{ fontSize: "2rem", color: "red" }}>IKIGAI</h1>;
const Author = () => <p style={authorStyle}> by Pratyush Garg </p>;

ReactDOM.render(<Books />, document.getElementById("root"));
