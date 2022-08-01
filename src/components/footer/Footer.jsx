import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      <ul href="#" className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebookF /></a>
      <a href="https://instagram.com"><AiFillInstagram /></a>
      <a href="https://twitter.com"><BsTwitter /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Yahya Ammar. All Rights Reserved</small>
    </div>

      </footer>
  )
}

export default Footer