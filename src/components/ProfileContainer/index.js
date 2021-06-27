import React from "react";
import './styles.css';
import logoGitHub from '../../assets/logoGitHub.png'

const ProfileContainer = () => {
  return (
    <div className="backgroundProfile">
      <div className="profileHeader">
        <h2>Overview</h2>
      </div>
      <div className="profileContainer">
        <aside className="sideBar">
          <img src={logoGitHub} alt="" className="userImage"/>
          <h1 className="userName">Hugo Ferreira</h1>
          <h3 className="userNickName">sdfsdfsd</h3>
          <p className="userDescription">fdsfsdfsd</p>
          <p className="userLocation">sdfsdfsdf</p>
        </aside>
        <div className="reposContainer">
          <p className="repoContainerTitle">Popular repositories</p>
          <div className="repo"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
