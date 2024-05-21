import React, { Component } from 'react';
import { FaCamera } from 'react-icons/fa';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <h1 className="profile-heading">Fill your Profile</h1>
        <div className="image-uploader">
          <input type="file" accept="image/*" id="profile-image" style={{ display: 'none' }} />
          <label htmlFor="profile-image" className="image-label">
            <div className="profile-image-placeholder">
              <span className="image-text">Upload Image</span>
              <FaCamera className="camera-icon" />
            </div>
          </label>
        </div>
        <form className="profile-form">
          <label>
            Username
            <input type="text" name="username" placeholder="Username"  />
          </label>
          <label>
            Full Name
            <input type="text" name="fullname" placeholder="Fullname"  />
          </label>
          <label>
            Email Address<span className="required">*</span>
            <input type="email" name="email" placeholder="example@youremail.com" required />
          </label>
          <label>
            Phone Number<span className="required">*</span>
            <input type="tel" name="phone" placeholder="+62-8421-4512-2531" required />
          </label>
          <button type="submit" className="btn-next">Next</button>
        </form>
      </div>
    );
  }
}

export default Profile;
