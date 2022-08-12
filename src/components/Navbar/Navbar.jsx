import React from 'react';
import './Navbar.css';
import {MdNotificationsActive} from 'react-icons/md';
import Avatar from '../../assets/images/Avatar.png'

function Navbar() {
  const date = new Date();
  const getCurrentDate = date.toDateString();
  return (
    <>
        <div className="top__nav--container">
            <div className="top__nav--child">
                <p className="top__nav--heading">{getCurrentDate}</p>
            </div>
            <div className="top__nav--child">
                <MdNotificationsActive className='top__nav--child-icon'/>
            </div>
            <div className="top__nav--child">
               <img src={Avatar} alt="User" />
            </div>
        </div>
    </>
  )
}

export default Navbar