import React, { useState } from 'react'

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
       {/* Carousel */}
       <div class="container-fluid">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    {/* Mark */}
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="text-center">
                                <h1>Mark Hollis</h1>
                                <h5><em>Status: Deceased</em></h5>
                            </div>
                            <div class="container">
                                <p>About: Co-Founder of HollisTech, a beloved and charismatic businessman </p>
                            </div>
                        </div>
                        <br></br>
                    </div>
                    {/* Jenny */}
                    <div class="carousel-item">
                        <div class="container">
                            <div class="text-center">
                                <h1>Jenny Hollis</h1>
                                <h5><em>Status: Suspect</em></h5>
                            </div>
                            <div class="container">
                                <p>About:Co-Founder of HollisTech, a studious, shy, computer engineer </p>
                                <p>Witness Statement: We had David and Lisa over that night to celebrate the upcoming IPO. David had been a big help for securing investor funds leading up to our IPO. I heard Lisa and David bickering all night, but I don’t know about what. All I remember is we were all having a good time drinking champagne and watching the sunset on the roof. After a few bottles, we came back down, I thought Mark had just had too much…. I can’t… I can’t…  </p>
                            </div>
                        </div>
                        <br></br>
                    </div>
                    {/* Lisa Evans */}
                    <div class="carousel-item">
                        <div class="container">
                            <div class="text-center">
                                <h1>Lisa Holton</h1>
                                <h5><em>Status: Suspect</em></h5>
                            </div>
                            <div class="container">
                                <p>About: a yoga instructor; orginally a scholarship student from Arkansas who met David at Stanford</p>
                                <p>Witness Statement: We were just trying to celebrate - the IPO was going to be a big break for all of them. Well, maybe not David, he’s always had plenty of money, but this was the first time he felt he was earning it.  Anyways, Jenny made this great dinner for us. David and I were interrupted for a bit when we stepped outside to take a call with our lawyer. Then we all went to the roof to toast while we watched the sunset. I feel like I remember David going to get us another bottle at one point, but otherwise we were always altogether. </p>
                            </div>
                        </div>
                        <br></br>
                    </div>
                    {/* David Holton */}
                    <div class="carousel-item">
                        <div class="container">
                            <div class="text-center">
                                <h1>David Holton</h1>
                                <h5><em>Status: Suspect</em></h5>
                            </div>
                            <div class="container">
                                <p>About: a wealthy, influential VC from the storied Holtons of Atherton</p>
                                <p>Witness Statement: It was a big night for us all, so we were toasting to celebrate! I don’t know, man. We were pouring the champagne downstairs; Lisa and I had to talk to our lawyer at one point which was a pretty big buzzkill.  Then we were on the roof. We were all drinking pretty heavily, Lisa got sick like she always does and had to go downstairs to the bathroom, but at least she came back with more bubbles! I dunno, we were just partying</p>
                            </div>
                        </div>
                        <br></br>
                    </div>
                   
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
       </div>
       {/* {clue1 = true? <Clue1 />: ""}
       {clue2 = true? <Clue2 />: ""}
       {clue3 = true? <Clue3 />: ""}
       {clue4 = true? <Clue4 />: ""} */}
    </div>
  )
}

export default Home