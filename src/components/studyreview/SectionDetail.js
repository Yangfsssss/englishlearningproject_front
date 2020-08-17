import React from "react";
import { useParams } from "react-router-dom";

const SectionDetail = ({ sections }) => {
  const id = useParams().id;
  const section = sections.find((section) => section.id === Number(id));
  // console.log(typeof sections[0].id, sections[1].id);
  // console.log(typeof id);
  // console.log(sections[0].id === id, sections[1].id === id);
  // console.log(section);

  return (
    <div>
      <h1>{section.title}</h1>
      <h2>{section.url}</h2>
      <ul>
        {section.wordUnits.map((wordUnit) => (
          <li>
            {wordUnit.word}:{wordUnit.translation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionDetail;
