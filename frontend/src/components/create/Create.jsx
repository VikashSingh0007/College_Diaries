import React, { useEffect } from "react"
import "./create.css"
import { IoIosAddCircleOutline } from "react-icons/io"
import { useState } from "react"
import { useContext } from "react"
import { Context } from "../../context/Context"
import axios from "axios"
import { useLocation } from "react-router-dom"

export const Create = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [Clgname, setClgname] = useState("")
  const { user } = useContext(Context)
  const [postImg, setPostImg] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
        if (fileReader.readyState === fileReader.DONE) {
            setPostImg(fileReader.result);
            console.log("img data", fileReader.result);
        }
    };
};
  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPost = {
      username: user.username,
      title,
      Clgname,
      desc,
      postImg,
    }
 
    if (postImg) {
      const data = new FormData()
      const filename = postImg
      data.append("name", filename)
      data.append("file", postImg)
      newPost.photo = filename

      
    }
    try {
      const res = await axios.post("/posts", newPost)
      window.location.replace("/post/" + res.data._id)
    } catch (error) {}
  }

  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>{postImg && <img src={postImg} alt='images' />}</div>
          <form onSubmit={handleSubmit}>
            <div className='inputfile flexCenter'>
              <label htmlFor='inputfile'>
                <IoIosAddCircleOutline />
              </label>
              <input type='file' id='inputfile' accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
            </div>
            <input type='text' placeholder='College Name' onChange={(e) => setClgname(e.target.value)} />
            <input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
            <textarea name='' placeholder='Blog' id='' cols='30' rows='10' onChange={(e) => setDesc(e.target.value)}></textarea>
            <button className='button'>Create Post</button>
          </form>
        </div>
      </section>
    </>
  )
}
