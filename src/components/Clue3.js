import React, { useState } from 'react'
import Clue4 from './Clue3'
import Code4 from './Code3'

const Clue3 = () => {

    const [pw4, setPw4] = useState(false)

  return (
    <div>
        <p>You open the magazine and see an interesting article... </p>
        <div class="p-3 mb-2 bg-light text-dark">
           <p></p>
        </div>
        <p>xx</p>
        <br></br>
        <p>Case Notes:  </p>
        {pw4 === true? <Clue4 />: <Code4 setPw4={setPw4}/>}
    </div>
  )
}

export default Clue3