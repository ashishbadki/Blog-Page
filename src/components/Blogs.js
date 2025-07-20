import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';
import './Blogs.css'
function Blogs() {

  // step 3 - consuming the data
  const {loading , posts , } = useContext(AppContext);
  return (
    <div className="main-container">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="no-post">No Post Found</div>
      ) : (
        <div className="card">
          {posts.map((post) => (
            <div className="inside-card" key={post.id}>
              <p className="title">{post.title}</p>
              <p className="name-container">By <span>{post.author}<span> on </span>{post.category}</span></p>
              <p className="date-container">Posted on {post.date}</p>
              <p className="content-container">{post.content}</p>
              <div className="hashtag">
                {post.tags.map((tag , index)=>{
                  return <span key={index}>{`#${tag}`}</span>
                })}
              </div>
            </div>
          ))}
        </div>
      )}
</div>

  )
}

export default Blogs