import React, { useState } from 'react'
import Clue4 from './Clue4'
import Code4 from './Code4'
import pic from '../images/Post-Nup.jpg'

const Clue3 = () => {

    const [pw4, setPw4] = useState(false)

  return (
    <div>
        <p>You spot a manilla envelope on the back stairs. Inside is an important looking document, a contract maybe? </p>
        <div class="p-3 mb-2 bg-light text-dark" style={{textAlign:"center"}}>
        <img src={pic} alt="post-nup" style={{width:'80%'}}/>
        </div>
        <p>I wonder why Mark was in such a rush to get this signed... </p>
        <br></br>
        <p>Case Notes: Jenny recalled he had been frantically checking his emails, and had suddenly refused to let her see his computer... </p>
        {pw4 === true? <Clue4 />: <Code4 setPw4={setPw4}/>}
    </div>
  )
}

export default Clue3