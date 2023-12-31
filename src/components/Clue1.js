import React, { useState } from 'react'
import Clue2 from './Clue2'
import Code2 from './Code2'

const Clue1 = () => {

    const [pw2, setPw2] = useState(false)

  return (
    <div>
        <p>You open the book and out falls a love letter. </p>
        <div class="p-3 mb-2 bg-light text-dark">
            <p><em>Dear Lisa,</em></p>
            <p><em>I can no longer bear the weight of this deception. The walls of lies we've built around us are closing in, and I fear the consequences of our actions. Tonight, I intend to tell Jenny the truth about us, about our affair. I know that this will shatter her, and I can't even begin to fathom the consequences it will have on our startup. But I cannot continue living this lie, deceiving the woman I once loved and betraying her trust. My heart aches at the thought of what awaits me after this confession, but I have made up my mind. Meet me at our secret spot, the one overlooking the Bridge, at midnight. This will be our last meeting as secret lovers. After tonight, everything changes.</em></p>
            <p><em>Yours, </em></p>
            <p><em>Mark</em></p>
        </div>
        <p>What a dramatic reveal!!</p>
        <br></br>
        <p>Case Notes: The detective was looking out at Lafayette Park when he spotted a fire hazard! </p>
        {pw2 === true? <Clue2 />: <Code2 setPw2={setPw2}/>}
    </div>
  )
}

export default Clue1