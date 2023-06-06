import React, { useState } from 'react';
import "./Timeline.css";
import Post from './posts/Post'
import Suggestions from './Suggestions';

function Timeline() {
  const [posts, SetPosts] = useState([
    {
      user: "isaias",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtwf-sa03GuuJwsyq1S99uI57X2cQOygU3g&usqp=CAU",
      likes: 12,
      timestamp:"12h",
    },
    {
      user: "luka",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkAzS_1eVF6NXV-cm2Ico3DFv1obqpX-28Q&usqp=CAU",
      likes: 56,
      timestamp:"5 min",
    },
    {
      user: "sebasian",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGzA0VHPV2iPfLqj0ZNpz9WIyauo3vYqvlw&usqp=CAU",
      likes: 77,
      timestamp:"5d",
    },

  ]);
  return (
    <div className = 'timeline'>
       <div className = 'timeline_left'>
        <div className = 'timeline_posts'>
          {posts.map(post => (
            <Post user = {post.user} 
            postImage = {post.postImage}
            likes = {post.likes}
            timestamp = {post.timestamp}
            />
            ))}

        </div>

       </div>
       <div className = 'timeline_right'>
        <div className ='timeline_suggestions'>
          <Suggestions />

        </div>

       </div>
       
    </div>
     
  )
}

export default Timeline