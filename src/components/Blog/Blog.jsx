import axios from "axios";
import { useEffect, useState } from "react";
import BlogPost from "../BlogPost/BlogPost";
import './Blog.css';

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://coconut-irradiated-bismuth.glitch.me/")
      .then(res => setData(res.data))
      .catch(console.log)
  }, [])


  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="blog__container">
        {data.map(element => <BlogPost element={element} key={element._id} />)}
      </div>
    </div>
  )
}

export default Blog;