import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
// import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import profile from '../assets/profile.jpg';
import chatIcon from '../assets/chatIcon.jpg';
import Typography from '@mui/material/Typography';
import './SideNavbar.css';

function SideNavbar() {
  const handleClick = (itemName) => {
    // Handle click action for each item
    console.log(`Clicked on ${itemName}`);
  };

  return (
    <div className='sidenav'>
      <Typography variant="body1" fontFamily="Dancing Script, sans-serif">
        <h1 style={{ marginLeft: '16px' }}>Instagram</h1>
      </Typography>
      <div className='sideItem' onClick={() => handleClick('Home')}>
        <button className="sideButton">
          <HomeIcon />
          <span>Home</span>
        </button>
      </div>
      <div className='sideItem' onClick={() => handleClick('Search')}>
        <button className="sideButton">
          <SearchIcon />
          <span>Search</span>
        </button>
      </div>
      <div className='sideItem' onClick={() => handleClick('Explore')}>
        <button className="sideButton">
          <ExploreIcon />
          <span>Explore</span>
        </button>
      </div>
      <div className='sideItem' onClick={() => handleClick('Reels')}>
        <button className="sideButton">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
      </div>
      <div className='sideItem' onClick={() => handleClick('Messages')}>
        <button className="sideButton">
          {/* <QuestionAnswerIcon /> */}
          <img src={chatIcon} alt='profile' width={25} height={25} style={{ borderRadius: '20px' }} />
          <span>Messages</span>
        </button>
      </div>
      <div className='sideItem' onClick={() => handleClick('Notifications')}>
        <button className="sideButton">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
      </div>
      <div className='sideItem' onClick={() => handleClick('Create')}>
        <button className="sideButton">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
      </div>
      <div className='sideItem' onClick={() => handleClick('Profile')}>
        <button className="sideButton">
          <img src={profile} alt='profile' width={25} height={25} style={{ borderRadius: '20px' }} />
          <span>Profile</span>
        </button>
      </div>
      <div className='sideItem' onClick={() => handleClick('More')}>
        <button className="sideButton">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  )
}

export default SideNavbar;
