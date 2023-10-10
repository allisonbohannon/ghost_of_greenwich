import React, { useState } from 'react'
import Carousel from './Carousel'
import Clue1 from './Clue1'
import Code1 from './Code1'

const Home = () => {
  
  const [pw1, setPw1] = useState(false)
  const [pw2, setPw2] = useState(false)
  const [pw3, setPw3] = useState(false)
  const [pw4, setPw4] = useState(false)

  return (
    <div>
       <p>The year was 2000, and the tech boom was at its zenith in San Francisco. The city's skyline glittered with the promise of fortune and innovation. In an apartment overlooking the bay, two couples found themselves entangled in a web of deceit that would soon lead to murder.</p>
       <p>At the heart of this tangled affair were Jenny and Mark, the co-founders of a promising tech startup, promising the streamline lives with their patent-pending technology: a smart speaker that could tell you the news, the weather, or even order your groceries from WebVan! </p>
       <p>The other couple in attendance was Lisa and David, David was a venture capitalist with a reputation for turning startups into unicorns. He  had invested heavily in Emily and Mark's company, making him one of the most influential investors in Silicon Valley. The four of them often dined together, but beneath the surface of their friendship, secrets simmered. </p>
       <p>Tonight, you’ll review the case files to see if you can solve the mystery. If you guess correctly, you’re in for a treat. If you guess wrong, well, don’t guess wrong...</p>
       <br></br>
       <p>Case Notes: Involved Parties </p>
       <Carousel/>

        <p>To find your next clue, the Case Notes indicate a single book was off of the bookshelf and on the coffee table at the time of the murder. Lisa said that Mark meant to lend her a book... some Russian novel about a cocktail? </p>
      
       {pw1 === true? <Clue1 />: <Code1 setPw1={setPw1}/>}
       {/*{clue2 === true? <Clue2 />: ""}
       {clue3 === true? <Clue3 />: ""}
       {clue4 === true? <Clue4 />: ""} */}
    </div>
  )
}

export default Home