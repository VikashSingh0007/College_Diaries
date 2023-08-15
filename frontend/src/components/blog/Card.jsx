import React, { useState } from "react"
import "./blog.css"
import { blog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"

export const Card = ({ posts }) => {
  // create file garnebelema
  // const [inticount,setcount] = useState(0);
  const PublicFlo = "http://localhost:5000/images/"
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {posts.map((item) => (
             <Link to={`/post/${item._id}`}>
              <div className='box boxItems' key={item.id}>
              {/* first ma yo  <div className='img'>{item.photo && <img src={item.cover} alt='' />}</div>*/}
              {item?.photo?.url && (
                <div className="img">
                    <img src={item?.photo?.url} alt="" />
                </div>
            )}              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  {item.categories.map((c) => (
                    <a href='/'>#{c.name}</a>
                  ))}
                </div>
                <h1><b>{item.Clgname}</b></h1>
                  <h3>{item.title}</h3>
                
                {/* <p>{item.desc.slice(0, 180)}...</p> */}
                {item.desc && item.desc.length > 180 ? (
  <p>{item.desc.slice(0, 180)}...</p>
) : (
  <p>{item.desc}</p>
)}

                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{new Date(item.createdAt).toDateString()}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>0</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div></Link>
          ))}
        </div>
      </section>
    </>
  )
}
