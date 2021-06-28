import React, {useState, useEffect} from "react";
import './styles.css';
import logoGitHub from '../../assets/logoGitHub.png'
import { useParams } from "react-router-dom";

import { APIRepo, APIUser } from '../../@types'

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const ProfileContainer = () => {
  const { username = 'huferr' } = useParams<{username?: string}>();
  const [data, setData] = useState<Data>();
  
  
  useEffect(()=> {
  
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;
  
      if (userResponse.status === 404) {
        setData({error: 'User Not Found'})
        return;
      }
  
      const user = await userResponse.json()
      const repos = await reposResponse.json()
  
      setData({
        user,
        repos,
      })
  
    })
  
  }, [username])
  
  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.user || !data.repos) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="backgroundProfile">
      <div className="profileHeader">
        <h2>Overview</h2>
      </div>
      <div className="profileContainer">
        <aside className="sideBar">
          <img src={logoGitHub} alt="" className="userImage"/>
          <h1 className="userName">{data.user.login}</h1>
          <h3 className="userNickName">{data.user.name}</h3>
          <p className="userDescription">{data.user.bio}</p>
          <p className="userLocation">{data.user.location}</p>
        </aside>
        <div className="reposContainer">
          <p className="repoContainerTitle">Popular repositories</p>
          <div className="repo">
            <div className="repoCard"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
