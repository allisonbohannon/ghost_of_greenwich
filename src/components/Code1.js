import React, { useState } from 'react'

const Code1 = ({setPw1}) => {
  
    const [codeWord, setCodeWord] = useState()
    const [err, setErr] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErr(false);
        if (codeWord === "margarita" || codeWord === "Margarita") {
            setPw1(true)
        } else {
            setErr(true)
        }

    }  
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <div class="form-group">
                <input  class="form-control" id="exampleInputPassword1" value={codeWord} onChange={(e)=>setCodeWord(e.target.value)} placeholder="what is the cocktail in question"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        {err === false? "": <div class="alert alert-danger" role="alert">Try again!</div>}
    </div>
   
   
  )
}

export default Code1