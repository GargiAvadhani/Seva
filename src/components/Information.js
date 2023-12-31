import React from 'react'
import "./InformationStyles.css"
import CountUp from 'react-countup'
import Feed from "../assets/3.jpg"
import sit from "../assets/sit.jpg"

const Information = () => {
  return (
    <div className="information">
      <h1>Seva Animal Welfare Charitable trust</h1>
      <div className="first-sec">
        <div className="sec-text">
        <div className="sit">
            <img alt="img" src={sit} />
          </div>
          <h2 className='first '>Who are we ?</h2>
          <p className='first'>Here at Seva Animal Welfare Charitable Trust,
            we know that sometimes all it takes to change the world is a little support.
            Since our founding in 2015 as a Non-Profit organisation, we have been determined to make an impact.
            Beginning with a foundation of 5 people -today the trust has expanded and has over 125 active members
            working in the interest of animal welfare throughout Pune city.</p>

          <div className="decor">
            <img alt="img" src={Feed} />
          </div>

          <h2 className='second'> What do we do ?</h2>
          <p className='second'>Our Seva team is mainly focused on ABC drives in various areas of Pune city and we successfully sterilized more than 4000 dogs
            with the help of Canine Control And Care and Blue Cross Society Of Pune. ( Till Nov 21) and not to forget our volunteers
            who are dedicated to this noble cause. We are always supported by Rescue Charitable Trust, Pets Force Pune and Animal Rescue Trust
            for all our rescue cases, without whom it is always tough to attend thousands of injured animals.
            Our adoption coordinators are always busy finding loving and forever homes for our indies which helps them live a safe and healthy life ahead.
            Our each volunteer is a feeder himself/herself and plays a key role in our animal welfare.
            We are animal rescuers. Our core belief that animals deserve our love, compassion and respect is the basis for everything we do.
            We believe all our stray friends need a special care and attention.
          </p>
        </div>
        <div className='stat'>
          <span>
            <CountUp start={100} end={5000} duration={4} />
            <span>+</span>
            </span>
            <span>Rescued Animals</span>
            </div>
        
            <div className='stat'>
          <span>
            <CountUp start={100} end={7000} duration={4} />
            <span>+</span>
            </span>
            <span>Sterilizations</span>
            </div>

            <div className='stat'>
          <span>
            <CountUp start={100} end={1599} duration={3} />
            <span>+</span>
            </span>
            <span>Adoptions</span>
            </div>


      </div>
    </div>






  );
};

export default Information;