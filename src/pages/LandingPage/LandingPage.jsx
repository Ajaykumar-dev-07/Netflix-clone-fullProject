import { useState } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

import featureImg1 from '../../assets/landingImg/feature-1.png';
import featureImg2 from '../../assets/landingImg/feature-2.png';
import featureImg3 from '../../assets/landingImg/feature-3.png';
import featureImg4 from '../../assets/landingImg/feature-4.png';
import logo from '../../assets/landingImg/logo.png';
import {FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'



const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="container">
      <header>
        <div className="navbar">
          <nav id="nav">
            <div>
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="btn">
              <button className="en">English ▼</button>
              <Link to={"/login"} id='btn' target='_blank'>Sign In</Link> 
            </div>
          </nav>
        </div>

        <div className="box1">
          <div className="sec1">
            <h1>Unlimited movies, TV shows and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="sec2">
              <input type="email" name="email" id="email" placeholder="Email address" />
              <Link to={'/login'}><button id="getStart" type="submit">Get Started</button></Link>
            </form>
          </div>
        </div>
      </header>

      <hr />
      
      <div className="box">
        <div className="row">
          <div className="col-text">
            <h2>Enjoy on your TV</h2>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className="col-img">
            <img src={featureImg1} alt="img" />
          </div>
        </div>
      </div>
      
      <hr />
      
      <div className="box">
        <div className="row">
          <div className="col-img">
            <img src={featureImg2} alt="img" />
          </div>
          <div className="col-text">
            <h2>Download your shows to watch offline</h2>
            <p>Save your favorites easily and always have something to watch.</p>
          </div>
        </div>  
      </div>
      
      <hr />
      
      <div className="box">
        <div className="row">
          <div className="col-text">
            <h2>Watch everywhere</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className="col-img">
            <img src={featureImg3} alt="img" />
          </div>
        </div>
      </div>
      
      <hr />
      
      <div className="box">
        <div className="row">
          <div className="col-img">
            <img src={featureImg4} alt="img" />
          </div>
          <div className="col-text">
            <h2>Create profiles for kids</h2>
            <p>Send children on adventures with their favorite characters in a space made just for them, free with your membership.</p>
          </div>
        </div>
      </div>
      
      <hr />
      <div className="box faq">
      <h2>Frequently Asked Questions</h2>

      <button className="accordion" onClick={() => toggleAccordion(0)}>
        What is Netflix? <span>{activeIndex === 0 ? 'x' : '+'}</span>
      </button>
      <div className={`q1 ${activeIndex === 0 ? 'active' : ''}`}>
        <p>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(1)}>
        How much does Netflix cost? <span>{activeIndex === 1 ? 'x' : '+'}</span>
      </button>
      <div className={`q1 ${activeIndex === 1 ? 'active' : ''}`}>
        <p>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(2)}>
        Where can I watch? <span>{activeIndex === 2 ? 'x' : '+'}</span>
      </button>
      <div className={`q1 ${activeIndex === 2 ? 'active' : ''}`}>
        <p>
          Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(3)}>
        How do I cancel? <span>{activeIndex === 3 ? 'x' : '+'}</span>
      </button>
      <div className={`q1 ${activeIndex === 3 ? 'active' : ''}`}>
        <p>
          Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(4)}>
        Where can I watch on Netflix? <span>{activeIndex === 4 ? 'x' : '+'}</span>
      </button>
      <div className={`q1 ${activeIndex === 4 ? 'active' : ''}`}>
        <p>
          Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(5)}>
        Is Netflix good for kids? <span>{activeIndex === 5 ? 'x' : '+'}</span>
      </button>
      <div className={`q1 ${activeIndex === 5 ? 'active' : ''}`}>
        <p>
          The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
        </p>
      </div>
    </div>
      
      <hr />
      
      <div className="box">
        <h3 style={{ fontSize: '20px', textAlign: 'center' }}>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="sec10">
        <form className="sec10">
              
             <Link to={"/login"}><button id="start" type="submit" target='_blank'>Get Started</button></Link> 
            </form>
        </div>
      </div>
      
      <hr />
      
      <footer className="foot">
        <div className="call">
          <h5>Questions? Call <a href="tel:+000-880-919-1694">000-880-919-1694</a></h5>
        </div>
        <div className="row">
          <div className="col">
            <li><a href="#FAQ">FAQ</a></li>
            <li><a href="#Account">Account</a></li>
            <li><a href="#InvsterRelation">Invster Relation</a></li>
            <li><a href="#SpeedTest">Speed Test</a></li>
          </div>
          <div className="col">
                <li><a href="Help Centre">Help Center</a></li>
                <li><a href="Privacy">Privacy</a></li>
                <li><a href="Media Center">Media Center</a></li>
                <li><a href="Jobs">jobs</a></li>
              </div>
             <div className="col">
                <li><a href="Terms of Use">Terms Of Use</a></li>
              <li><a href="Contact Us">Contact Us</a></li>
              <li><a href="Cookie">Cookie Preferences</a></li>
              <li><a href="Legal">Legal Notices</a></li>
             </div>
             <div className="col">
                <li><a href="Ways to watch">Ways to Watch</a></li>
              <li><a href="Info">Corporate information</a></li>
              <li><a href="Cookie">Only  on nNetflix</a></li>
              <li><a href="Legal">Legal Notices</a></li>
             </div>
        </div>
       
        <div className="copy">
          <div>
          <small className="copyright">&copy; Netflix India</small>
          <div className='social-icons'>

      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
      
      </div>
    </div>
   

          
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
