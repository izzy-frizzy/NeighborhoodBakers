import React from 'react';
import "./Post.css";
import { Avatar } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; //like button on posts
import ReviewsIcon from '@mui/icons-material/Reviews'; // comments on posts
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'; // share button on posts
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'; //save button on posts

function Post({user, postImage, likes, timestamp}) {
  return (
    <div className='posts'>
      <div className='post_header'>
        <div className='post_headerAuther'>
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} • <span>{timestamp}</span>

        </div>

        <MoreHorizIcon />

      </div>

      <div className='post_image'>
        <img src= {postImage}
          alt=""
        />
      </div>
      <div className='post_footer'>
        <div className='post_footerIcons'>
          <div className='post_iconMain'>
            <FavoriteBorderIcon className='postIcon'/>
            <ReviewsIcon className='postIcon'/>
            <NearMeOutlinedIcon className='postIcon'/>
          </div>
          <div className='post_iconSave'>
          <BookmarkBorderIcon className='postIcon'/>
          </div>

        </div>
        liked by {likes} people
      </div>
    </div>
  )
}

export default Post