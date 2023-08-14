import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

const mystyle = 
{
  position: "relative",
  left: "0",
  bottom: "0",
  width: "100%"
};

const mystyle3 = 
{
  fontSize: "15px",
transform:"translateX(20px)"
};
export const Footer = () => {

 
  
  return (
    <>
      <footer style={mystyle} className='boxItems'>
        <div className='container flex'>
          <p style={mystyle3}>MADE WITH lOVE AR & VS & AT</p>
          <div className='social'   >
           <a style={{
 color:"black"
}} href="https://www.facebook.com/aditya.roysha/" target="_blank" rel="noreferrer"><BsFacebook className='icon' /></a>
           <a  style={{
 color:"black"
}} href="https://www.instagram.com/singhvikash7077/" target="_blank" rel="noreferrer"><RiInstagramFill className='icon' /></a>
           <a  style={{
 color:"black"
}} href="https://www.linkedin.com/in/arinjaythakur/" target="_blank" rel="noreferrer"><AiFillLinkedin className='icon' /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
