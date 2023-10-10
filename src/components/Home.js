import React, { useState } from 'react'
import Carousel from './Carousel'

const Home = () => {
  
  const [clue1, setClue1] = useState(false)
  const [clue2, setClue2] = useState(false)
  const [clue3, setClue3] = useState(false)
  const [clue4, setClue4] = useState(false)

  return (
    <div>
       <p>The year was 2000, and the tech boom was at its zenith in San Francisco. The city's skyline glittered with the promise of fortune and innovation. In an apartment overlooking the bay, two couples found themselves entangled in a web of deceit that would soon lead to murder.</p>
       <p>At the heart of this tangled affair were Jenny and Mark, the co-founders of a promising tech startup, promising the streamline lives with their patent-pending technology: a smart speaker that could tell you the news, the weather, or even order your groceries from WebVan! </p>
       <p>The other couple in attendance was Lisa and David, David was a venture capitalist with a reputation for turning startups into unicorns. He  had invested heavily in Emily and Mark's company, making him one of the most influential investors in Silicon Valley. The four of them often dined together, but beneath the surface of their friendship, secrets simmered. </p>
       <p>Tonight, you’ll review the case files to see if you can solve the mystery. If you guess correctly, you’re in for a treat. If you guess wrong, well, don’t guess wrong...</p>
       <br></br>
       <p>Involved Parties </p>
       <Carousel/>
      
       {/* {clue1 = true? <Clue1 />: ""}
       {clue2 = true? <Clue2 />: ""}
       {clue3 = true? <Clue3 />: ""}
       {clue4 = true? <Clue4 />: ""} */}
    </div>
  )
}

export default Home