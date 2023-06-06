import React from 'react'
import "./Sidenav.css"
import CottageIcon from '@mui/icons-material/Cottage'; // home
import SearchIcon from '@mui/icons-material/Search'; // search
import BakeryDiningIcon from '@mui/icons-material/BakeryDining'; // explore
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'; // messages
import NotificationsIcon from '@mui/icons-material/Notifications'; // notifications button
import AddBusinessIcon from '@mui/icons-material/AddBusiness'; // new post
import MenuIcon from '@mui/icons-material/Menu'; // menu button


function Sidenav() {
  
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={`sidenav ${isOpen ? 'open' : ''}`}>

      <img className='sidenav_logo'
        src="https://www.pngkey.com/png/detail/53-534954_croissant-bake-bakery-bread-comments-gulf-asian-english.png"
        //src = "logo/logo-color.jpeg" 
        alt="Neighborhood Bakers" />

      <div className='sidenav_more'>
        <button className='sidenav_button' onClick={toggleSidebar}>
          <MenuIcon />
          <span>More</span>
        </button>
      </div>

      <div className='sidenav_buttons'>
        <button className='sidenav_button'>
          <CottageIcon />
          <span>Home</span>
        </button>
        <button className='sidenav_button'>
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className='sidenav_button'>
          <BakeryDiningIcon />
          <span>Explore</span>
        </button>
        <button className='sidenav_button'>
          <ChatBubbleOutlineIcon />
          <span>Messages</span>
        </button>
        <button className='sidenav_button'>
          <NotificationsIcon />
          <span>Notifications</span>
        </button>
        <button className='sidenav_button'>
          <AddBusinessIcon />
          <span>Post</span>
        </button>


      </div>


    </div>
  )
}

export default Sidenav