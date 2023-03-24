import React, { useEffect, useState } from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import axios from "axios"
import { useLocation } from "react-router-dom"

export const Home = () => {
  const [posts, setPosts] = useState([])

  // setp 2
  const { search } = useLocation()
  // const location = useLocation()
  //console.log(location)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPost()
  }, [search])
  return (
    <>
    <marquee style={{paddingTop:"25px",marginBottom:"-25px"}} behavior="" direction="" ><h1>Write what you like!</h1></marquee>
      <Category />
      <Card posts={posts} />
    </>
  )
}
