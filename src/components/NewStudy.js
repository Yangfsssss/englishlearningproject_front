import React, { useState } from 'react'
import network from '../services/network'

const NewStudy = () => {
  const [url, setUrl] = useState('')
  const [wordUnit, setWordUnit] = useState({ word: '', translation: '' })
  const [wordUnits, setWordUnits] = useState([])
  const [isUrlSaved, setIsUrlSaved] = useState(false)

  const showUrl = { display: isUrlSaved ? '' : 'none' }
  const notShowUrl = { display: isUrlSaved ? 'none' : '' }

  const handleURLChange = (e) => setUrl(e.target.value)
  const handleWordChange = (e) =>
    setWordUnit({ ...wordUnit, word: e.target.value })

  const saveUrl = (e) => {
    e.preventDefault()

    if (url === '') {
      alert('Url cannot be empty')
    } else {
      setIsUrlSaved(true)
    }
  }

  const saveWord = async (e) => {
    e.preventDefault()

    if (wordUnit.word === '') {
      alert('word cannot be empty')
    } else {
      const res = await network.translate(wordUnit.word)
      setWordUnit({ ...wordUnit, translation: res.translation })
      setWordUnits(wordUnits.concat(wordUnit))
      setWordUnit({ word: '', translation: '' })
    }
  }

  const saveSection = (e) => {
    e.preventDefault()

    if (window.confirm('finished this section and save?')) {
      const newSection = {
        url,
        wordUnits,
      }

      network.saveData('sections', newSection)
    }
  }

  return (
    <form onSubmit={saveSection}>
      <div style={notShowUrl}>
        <h2>URL:</h2>
        <input value={url} onChange={handleURLChange} />
        <button onClick={saveUrl}>Add</button>
      </div>
      <div style={showUrl}>
        <h2>{url}</h2>
      </div>
      <div>
        <h2>word:</h2>
        <input value={wordUnit.word} onChange={handleWordChange} />
        <button onClick={saveWord}>Add</button>
      </div>
      <ul>
        {wordUnits.map((wordUnit, index) => (
          <li key={index}>
            {wordUnit.word}
            {wordUnit.translation}
          </li>
        ))}
      </ul>
      <button type="submit">Save</button>
    </form>
  )
}

export default NewStudy
