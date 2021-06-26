import React from "react";
import './styles.css';

const ProfileContainer = () => {
  return (
    <div className="backgroundProfile">
      <div className="profileHeader">
        <h2>Overview</h2>
      </div>
      <div className="profileContainer">
        <aside className="sideBar">
          <img src="" alt="" className="userImage"/>
          <h1 className="userName"></h1>
          <h3 className="userNickName"></h3>
          <p className="userDescription"></p>
          <p className="userLocation"></p>
        </aside>
        <div></div>
      </div>
    </div>
  );
};

export default ProfileContainer;
