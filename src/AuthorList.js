import React from "react";
import AuthorCard from "./AuthorCard";
import authors from "./data";

const AuthorList = props => {
  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">
        {props.authors.map((author, index) => (
          <AuthorCard author={author} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AuthorList;
