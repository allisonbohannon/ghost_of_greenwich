import React from 'react'

const Carousel = () => {
  return (
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
  )
}

export default Carousel