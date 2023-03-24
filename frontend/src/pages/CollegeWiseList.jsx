
import axios from 'axios'
import React, { useEffect, useState } from "react"
import { Card } from "../components/blog/Card"
import { useLocation } from "react-router-dom"
function CollegeWiseList(props) {
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
    <div>
      <Card posts={posts.filter((element)=>{
            
            return element.Clgname ===props.name;
        }) }>

        </Card>
    </div>
  )
}

export default CollegeWiseList;
