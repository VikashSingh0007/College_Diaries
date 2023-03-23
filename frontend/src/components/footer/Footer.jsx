import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"


export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p>MADE WITH lOVE AT & vk & AR</p>
          <div className='social'>
           <a href="https://leetcode.com/problemset/all/" target="_blank" rel="noreferrer"><BsFacebook className='icon' /></a>
            <RiInstagramFill className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}
