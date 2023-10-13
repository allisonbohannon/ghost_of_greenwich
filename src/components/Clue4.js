import React, { useState } from 'react'
import Guess from './Guess'

const Clue4 = () => {

    const [ready, setReady] = useState(false)

    const handleClick = () => {
        setReady(true)
    }

  return (
    <div>
        <p>You see an interesting email in the trashcan... </p>
        <div class="p-3 mb-2 bg-light text-dark">
           <p>Dear Mark and Emily,</p>
           <br></br>
           <p>I hope this email finds you well. I wanted to provide you with an update regarding our efforts to secure a patent for HollisTech's groundbreaking smart speaker.</p>
           <br></br>
           <p>We have been diligently working with the United States Patent and Trademark Office (USPTO) to advance the patent application for the technology behind the smart speaker. Our legal team has put forth a strong case, highlighting the innovative features and unique aspects of your product. Unfortunately, despite our best efforts, we regret to inform you that the patent application has not been approved at this time.</p>
           <br></br>
           <p>The USPTO has raised certain concerns and objections during their review process, which we are actively addressing. We believe that with further amendments and clarifications to the application, there is still a possibility of obtaining a patent for the smart speaker technology. Our legal team remains committed to pursuing this avenue on your behalf.</p>
           <br></br>
           <p>Please understand that patent applications can be complex and time-consuming, and the process often involves several rounds of reviews and revisions. We are dedicated to exhausting all available legal avenues to secure the patent for your innovative smart speaker.</p>
           <br></br>
           <p>In the meantime, we recommend continuing to protect your intellectual property through other means, such as trade secrets and copyrights, to safeguard your competitive edge in the market.</p>
           <br></br>
           <p>We will keep you updated on any developments regarding the patent application and will provide guidance on the next steps in the process. If you have any questions or concerns in the interim, please do not hesitate to reach out to our legal team.</p>
           <br></br>
           <p>Thank you for your understanding and continued trust in our legal representation.</p>
           <br></br>
           <p>Sincerely,</p>
           <br></br>
           <p>Jay Chang, Esq.</p>
           <p>j.chang@hotmail.com</p>xs
        </div>
        <p>How suspiscious! Who else knew the patent wasn't approved...</p>
        <br></br>
        <p>Now that you've gathered the evidence, it's time to question the final witness, the smart speaker, codename Ziggy. However, as a prototype, the speaker is very temperamental. If you guess correctly, you'll get a bounty for setting Allison's apartment free from this ghost. However, if you guess you wrong, you'll have to pay the price </p>
        <p>Enter the bedroom now and close the door behind you...</p>
        <p><em>Note: Once you are done, please follow the instructions to reset the room and leave the door cracked</em></p>
        <button type="button" class="btn btn-secondary" onClick={handleClick}>Click here once you've entered the bedroom</button>
        <br></br>
        {ready === true ? <Guess /> : "" }

    </div>
  )
}

export default Clue4