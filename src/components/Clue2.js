import React, { useState } from 'react'
import Clue3 from './Clue3'
import Code3 from './Code3'

const Clue2 = () => {

    const [pw3, setPw3] = useState(false)

  return (
    <div>
        <p>You open the magazine and see an interesting article... </p>
        <div class="p-3 mb-2 bg-light text-dark">
            <h3>HollisTech: Mark Hollis' Triumph in Pioneering A Smarter Home</h3>
            <p><em>In the ever-evolving landscape of tech innovation, the story of Mark Hollis and his groundbreaking startup, HollisTech, shines as a beacon of entrepreneurial brilliance. Today, we delve into the remarkable journey of Mark Hollis, a visionary leader who has brought the world its very first smart home speaker, revolutionizing the way we interact with technology.</em></p>
            <h3>A Visionary's Inception</h3>
            <p>In the late 90s, nestled in the heart of Silicon Valley, Mark Hollis and his wife, Jenny, embarked on a mission that would redefine the future of home automation. Their vision was nothing short of audacious: to develop the world's first smart home speaker, a device that would seamlessly integrate into our lives, making daily tasks more intuitive and connected.</p>
            <p>From the outset, Mark's passion for technology and his gift for articulating a visionary concept drew investors and tech enthusiasts to the HollisTech fold. His magnetic charm and unparalleled ability to convey the potential of smart home technology soon established him as the driving force behind HollisTech's remarkable journey.</p>          
            <h3>The Charismatic Pioneer</h3>
            <p>Mark's influence within the tech industry quickly grew to legendary proportions. His captivating public addresses and relentless pursuit of innovation made him a household name among venture capitalists and tech enthusiasts. Investors, in particular, were enthralled by Mark's boundless charisma and his knack for turning complex technological ideas into compelling narratives.</p>
            <p>It was this unique combination of technical prowess and eloquence that set Mark apart in an industry teeming with brilliant minds. Investors began to view HollisTech as Mark's brainchild, although the true story behind its inception was more nuanced.</p>
            <h3>Mark's Unwavering Ascent</h3>
            <p>Mark's unrelenting drive and unwavering focus propelled HollisTech to unparalleled heights. The tech world watched in awe as he navigated the intricate web of technological partnerships and innovations, all while exuding an aura of unwavering confidence.</p>
            <p>Under Mark's visionary leadership, HollisTech created the world's first smart home speaker, a device that promises to redefine how we interacted with our living spaces. Amongst skyrocketing IPO valuations,  Mark's reputation as a tech pioneer is firmly cemented. The world eagerly awaits the next chapter in the HollisTech story.</p>
            <h3>The Future of Smart Home Technology</h3>
            <p>As we look to the future, it is clear that Mark Hollis' leadership and vision are poised to guide HollisTech toward even greater accomplishments. The company's pioneering smart home speaker is just the beginning of a new era in home automation, where technology seamlessly integrates into our daily lives.</p>
            <p>In an industry marked by innovation and transformation, Mark Hollis' story serves as a testament to the power of a visionary leader who dares to dream big and brings those dreams to fruition. As HollisTech continues to blaze a trail in the world of smart home technology, we eagerly await the next groundbreaking innovations that Mark will unveil, forever changing the way we live, work, and play.</p>
            <p>The tech world stands poised to witness the ongoing legacy of Mark Hollis, a pioneer who has undeniably left an indelible mark on the industry, with the world's first smart home speaker as his crowning achievement.</p>
        </div>
        <p>Something seems to be missing from that article...</p>
        <br></br>
        <p>Case Notes: Lisa and David mentioned they stepped onto the back stairs to talk with their lawyer about a change in their  Post-Nuptial agreement… </p>
        {pw3 === true? <Clue3 />: <Code3 setPw3={setPw3}/>}
    </div>
  )
}

export default Clue2