import React, { useState, useEffect } from 'react'
import network from '../services/network'

import NewStudy from './NewStudy'
import StudyReview from './StudyReview'

const Home = () => {
  const [showNewStudy, setshowNewStudy] = useState(false)
  const [showStudyReview, setshowStudyReview] = useState(false)
  const [sections, setSections] = useState([])

  useEffect(() => {
    network.getData().then((sections) => setSections(sections))
  }, [])
  console.log(sections)

  const home = { display: showNewStudy || showStudyReview ? 'none' : '' }
  const newStudy = { display: showNewStudy ? '' : 'none' }
  const studyReview = { display: showStudyReview ? '' : 'none' }
  const back = { display: showNewStudy || showStudyReview ? '' : 'none' }

  const handleShowNewStudy = () => setshowNewStudy(true)
  const handleShowStudyReview = () => setshowStudyReview(true)
  const handleGoBack = () => {
    setshowNewStudy(false)
    setshowStudyReview(false)
  }

  return (
    <div>
      <div style={back}>
        <button onClick={handleGoBack}>back</button>
      </div>
      <div style={home}>
        <button onClick={handleShowNewStudy}>New Study</button>
        <button onClick={handleShowStudyReview}> Study Review</button>
      </div>
      <div style={newStudy}>
        <NewStudy />
      </div>
      <div style={studyReview}>
        <StudyReview sections={sections} />
      </div>
    </div>
  )
}

export default Home
