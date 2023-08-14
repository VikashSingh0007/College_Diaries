import React, { useContext, useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { RiImageAddLine } from "react-icons/ri"
import { Context } from "../../context/Context"
import { Link } from "react-router-dom"
import { BsFillPersonFill } from "react-icons/bs";

export const User = () => {
  const { user, dispatch } = useContext(Context)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }

  const PublicFlo = "http://localhost:5000/images/"
const mystyle={

fontSize :"20px",
transform: "TranslateX(-20px)"
};
const mystyle3={

  color:"black",
  transform: "Translate(30px, 10px)"
  
  };
const mystyle2={

  height:"50px",
  width:"50px",
  transform: "TranslateX(-20px)"
  };
  const mystyle5={

    height:"50px",
    width:"50px",
   
    };
  const mystyle4={

    transform: "TranslateY(-20px)",
    paddingBottom:"10px"
  
    };
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              {user.profilePic ?<img src={PublicFlo + user.profilePic} alt='' />:<BsFillPersonFill style={mystyle2} />}
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
               
                  <div className='image'>
                    <div className='img'>
                    {user.profilePic ?<img src={PublicFlo + user.profilePic} alt='' />:<BsFillPersonFill style={mystyle5}/>}
                    </div>
                    <Link style={mystyle3} to={"/account"}>
                    <div className='text'>
                      <h2 >{user.username}</h2>
                     
                    </div>
                    </Link>
                  </div>
                  <div style={mystyle4} >
                <Link to='/create'>
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                
                <button className='box'>
                  <IoSettingsOutline className='icon' />
                  <h4>My Account</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                <button className='box' onClick={handleLogout}>
                  <BiLogOut className='icon' />
                  {user && <h4>Log Out</h4>}
                </button>
              </div>
              </div>
            )}
          </>
        ) : (
          <Link to='/login'>
            <button style={mystyle}><b>My Account</b></button>
          </Link>
        )}
      </div>
    </>
  )
}
