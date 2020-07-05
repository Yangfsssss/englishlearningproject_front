import React from 'react'

const Section = ({ url, words }) => {
  return (
    <div>
      <h1>{url}</h1>
      <ul>
        {words.map((word) => (
          <li>{word}</li>
        ))}
      </ul>
    </div>
  )
}

export default Section
