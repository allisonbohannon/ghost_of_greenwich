import React, { useState } from 'react'

const Code3 = ({setPw3}) => {
  
    const [codeWord, setCodeWord] = useState()
    const [err, setErr] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErr(false);
        if (codeWord.toLowerCase() === "hanover") {
            setPw3(true);
        } else {
            setErr(true);
        }
    }  

  return (
    <div>
         <form onSubmit={handleSubmit}>
            <div class="form-group">
                <input  class="form-control" id="exampleInputPassword1" value={codeWord} onChange={(e)=>setCodeWord(e.target.value)} placeholder="what is the name of the law firm?"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        {err === false? "": <div class="alert alert-danger" role="alert">Try again!</div>}
    </div>
   
   
  )
}

export default Code3