import React,{useState} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav==='#' ? 'active' : ''} onClick={()=>setActiveNav('#')}><AiOutlineHome/></a>
      <a href="#about" className={activeNav==='#about' ? 'active' : ''} onClick={()=>setActiveNav('#about')}><AiOutlineUser/></a>
      <a href="#experience"  className={activeNav==='#experience' ? 'active' : ''} onClick={()=>setActiveNav('#about')}><BiBook/></a>
      <a href="#portfolio"  className={activeNav==='#portfolio' ? 'active' : ''} onClick={()=>setActiveNav('#about')}><RiServiceLine/></a>
      <a href="#contact"  className={activeNav==='#contact' ? 'active' : ''} onClick={()=>setActiveNav('#about')}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav