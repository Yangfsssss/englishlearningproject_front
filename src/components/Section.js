import React from "react";

const Section = ({ title, url, words }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{url}</h2>
      <ul>
        {words.map(word => (
          <li>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default Section;
