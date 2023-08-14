import React, { useContext } from "react"
import "./header.css"
import { User } from "./User"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
        
          <nav>
            <ul>
              
              {nav.map((link) => (
                <li key={link.id}>
                 
                  <Link to={link.url}><b className="Tag ">{link.text}</b></Link>
                  
                </li>
              ))}
             
            </ul>
          
          </nav>
          <div className="centre">
            <h1 className="innerc">College Diaries</h1>
          </div>
          <div className='account flexCenter'>
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
