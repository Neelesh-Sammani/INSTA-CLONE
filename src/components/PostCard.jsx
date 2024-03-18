import React from 'react';
import './PostCard.css'; // Import your CSS file
import profile from '../assets/profile.jpg';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import CommentIcon from '@material-ui/icons/Comment';
import { BsBookmark, BsChat, BsHeart, BsSend } from "react-icons/bs";

// import ShareIcon from '@material-ui/icons/Share';
import ThreeDotsMenu from './ThreeDotsMenu';

function PostCard() {
  return (
    <div className="post-card">
      <div className='post'>
      <div className="post-header">
      <img src={profile} alt='profile' width={25} height={25} style={{borderRadius:'20px'}} />
        <div className="profile-info">
          <h2>neeleshsammani</h2>
          <p>Hyderabad</p>
        </div>
      </div>
      <ThreeDotsMenu />
      </div>
      <div className="post-image">
      <img src="https://source.unsplash.com/random/1080x1350" alt="PostImage" />
      </div>
      <div className="post-footer">
      <div className='icons'>
      <div className="icon-container">
      <BsHeart className="icon" style={{ fontSize: '26px'}} />
      <div className="mirror-icon icon">
      <BsChat size={24} />
    </div>
      <BsSend size={24} className="icon" />
    </div>
    <div>
      <BsBookmark size={24} className="icon" />
    </div>
    </div>
        <div className="likes">Likes: 100</div>
        <div className="caption">Caption: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
    </div>
  );
}

export default PostCard;
