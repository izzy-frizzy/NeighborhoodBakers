import React from 'react';
import "./Post.css";
import { Avatar } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; //like button on posts
import ReviewsIcon from '@mui/icons-material/Reviews'; // comments on posts
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'; // share button on posts
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'; //save button on posts

function Post() {
  return (
    <div className='posts'>
      <div className='post_header'>
        <div className='post_headerAuther'>
          <Avatar>frizzy</Avatar>
          default_username • <span>12hr</span>

        </div>

        <MoreHorizIcon />

      </div>

      <div className='post_image'>
        <img src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-sweet-it.jpg?itok=IOyK92Fc"
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
        liked by 21 people
      </div>
    </div>
  )
}

export default Post