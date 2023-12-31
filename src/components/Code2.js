import React, { useState } from 'react'

const Code2 = ({setPw2}) => {
  
    const [codeWord, setCodeWord] = useState()
    const [err, setErr] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErr(false);
        if (codeWord.toLowerCase() === "forbes" || codeWord === "Forbes") {
            setPw2(true)
        } else {
            setErr(true)
        }

    }  
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <div class="form-group">
                <input  class="form-control" id="exampleInputPassword1" value={codeWord} onChange={(e)=>setCodeWord(e.target.value)} placeholder="what is the name of the magazine?"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        {err === false? "": <div class="alert alert-danger" role="alert">Try again!</div>}
    </div>
   
   
  )
}

export default Code2