import React from 'react';
import profile from '../assets/profile.jpg';
import './Suggestions.css';

function Suggestions() {
  return (
    <>
    <div className='suggest'>
    <div className="post-header">
      <img src={profile} alt='profile' width={25} height={25} style={{borderRadius:'20px'}} />
        <div className="profile-info">
          <h2>neeleshsammani</h2>
          <p>Neelsh Sammani</p>
        </div>
    </div>
    <div>
        <span style={{color:'#0095F6',fontWeight:'600',fontSize:'12px'}}>Switch</span>
    </div>
    </div>
    <div className='suggestHead'>
        <p>Suggested for you</p>
        <h5>See All</h5>
    </div>
    <div className='suggest'>
    <div className="post-header">
      <img src={profile} alt='profile' width={25} height={25} style={{borderRadius:'20px'}} />
        <div className="profile-info">
          <h2>neeleshsammani</h2>
          <p>Neelsh Sammani</p>
        </div>
    </div>
    <div>
        <span style={{color:'#0095F6',fontWeight:'600',fontSize:'12px'}}>Follow</span>
    </div>
    </div>
    <div className='suggest'>
    <div className="post-header">
      <img src={profile} alt='profile' width={25} height={25} style={{borderRadius:'20px'}} />
        <div className="profile-info">
          <h2>neeleshsammani</h2>
          <p>Neelsh Sammani</p>
        </div>
    </div>
    <div>
        <span style={{color:'#0095F6',fontWeight:'600',fontSize:'12px'}}>Follow</span>
    </div>
    </div>
    <div className='suggest'>
    <div className="post-header">
      <img src={profile} alt='profile' width={25} height={25} style={{borderRadius:'20px'}} />
        <div className="profile-info">
          <h2>neeleshsammani</h2>
          <p>Neelsh Sammani</p>
        </div>
    </div>
    <div>
        <span style={{color:'#0095F6',fontWeight:'600',fontSize:'12px'}}>Follow</span>
    </div>
    </div>
    <div className='suggest'>
    <div className="post-header">
      <img src={profile} alt='profile' width={25} height={25} style={{borderRadius:'20px'}} />
        <div className="profile-info">
          <h2>neeleshsammani</h2>
          <p>Neelsh Sammani</p>
        </div>
    </div>
    <div>
        <span style={{color:'#0095F6',fontWeight:'600',fontSize:'12px'}}>Follow</span>
    </div>
    </div>
    <div className='suggest'>
    <div className="post-header">
      <img src={profile} alt='profile' width={25} height={25} style={{borderRadius:'20px'}} />
        <div className="profile-info">
          <h2>neeleshsammani</h2>
          <p>Neelsh Sammani</p>
        </div>
    </div>
    <div>
        <span style={{color:'#0095F6',fontWeight:'600',fontSize:'12px'}}>Follow</span>
    </div>
    </div>
    </>
  )
}

export default Suggestions;
