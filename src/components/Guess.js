import React, { useState } from 'react'

const Guess = () => {
    const [killer, setKiller] = useState(null)

    const handleClick = (e) => {
        if (e.target.value === "jenny") {
            setKiller("Say: Ziggy, was Jenny the killer")
        } else if (e.target.value === "lisa") {
            setKiller("Say: Ziggy, I'm pretty sure it was Lisa")
        } else {
            setKiller("Say: Ziggy, Mark obviously did it")
        }
    }
  return (
   
   <div>
        <div><br></br></div>
        <div class="container" style={{display:"inline-flex", justifyContent:"space-around"}}>
            <button type="button" class="btn btn-secondary" style={{width:"25%"}} value="jenny" onClick={handleClick}>Jenny</button>
            <button type="button" class="btn btn-secondary" style={{width:"25%"}} value="lisa" onClick={handleClick}>Lisa</button>
            <button type="button" class="btn btn-secondary" style={{width:"25%"}} value="mark" onClick={handleClick}>David</button>
        </div>
        <div class="container">
            <br></br>
            <h3>{killer}</h3>
        </div>
        <h3>{killer === null ? "" : "To reset the room or try again, say: Ziggy, reset the room"}</h3>
   </div>
  )
}

export default Guess