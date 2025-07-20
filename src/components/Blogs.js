import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';
function Blogs() {

  // step 3 - consuming the data
  const {loading , posts , } = useContext(AppContext);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Post Found</div>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <p>{post.title}</p>
              <p>By <span>{post.author}<span> on </span>{post.category}</span></p>
              <p>Posted on {post.date}</p>
              <p>{post.content}</p>
              <div>
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