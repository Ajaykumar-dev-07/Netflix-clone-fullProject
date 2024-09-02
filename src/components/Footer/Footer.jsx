
import './Footer.css'
import {FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer-container">
     <div className="footer-icons">
     <FaFacebookF/>
     <FaInstagram/>
     <FaTwitter/>
     <FaYoutube/>
     </div>
     <div className="footer-links">
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li> Corporate Information</li>
        <li>Contact Us</li>
      </ul>
    
     </div>
     <div className="copyright">
       <p>© 1997-2023 Netflix, Inc.</p>
       
       <p></p>
     </div>
     </div>
     <div className="creator-info">
       <p>Created with ❤ by Ajay</p>
       <p>© 2024. All rights reserved.</p>
     </div>
    </div>
   
  )
}

export default Footer