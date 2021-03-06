import React, { useState } from "react";
import "./styles.css";
import { RiGroupLine, RiMapPin2Line, RiMailLine } from "react-icons/ri";
import { APIRepo, APIUser } from "../../@types";

import RepoCard from "../RepoCard";

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const ProfileContainer = () => {
  const username = localStorage.getItem("username");
  const [data, setData] = useState<Data>();

  Promise.all([
    fetch(`https://api.github.com/users/${username}`),
    fetch(`https://api.github.com/users/${username}/repos`),
  ]).then(async (responses) => {
    const [userResponse, reposResponse] = responses;

    if (userResponse.status === 404) {
      setData({ error: "User Not Found" });
      return;
    }

    const user = await userResponse.json();
    const repos = await reposResponse.json();

    const SlicedRepos = repos.slice(0,6)

    setData({
      user,
      repos: SlicedRepos,
    });
  });

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data.repos) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="backgroundProfile">
      <div className="profileHeader">
        <h2>Overview</h2>
      </div>
      <div className="profileContainer">
        <aside className="sideBar">
          <img src={data.user.avatar_url} alt="" className="userImage" />
          <h1 className="userName">{data.user.name}</h1>
          <h3 className="userNickName">{data.user.login}</h3>
          <p className="userDescription">{data.user.bio}</p>
          <ul className="followers">
            <li>
              <RiGroupLine className="followerIcon" />
              <b>{data.user.followers}</b>
              <p>followers</p>
              <span>·</span>
            </li>
            <li>
              <b>{data.user.following}</b>
              <p>following</p>
            </li>
          </ul>
            <div className='locationContainer'>
              <RiMapPin2Line className='mapIcon'/>
              <p className="userLocation">{data.user.location}</p>
            </div>
        </aside>
        <div className="reposContainer">
          <p className="repoContainerTitle">Popular repositories</p>
          <div className="repos">
            {data.repos.map((item) => (
              <RepoCard
                key={item.name}
                username={item.owner.login}
                reponame={item.name}
                description={item.description}
                language={item.language}
                stars={item.stargazers_count}
                forks={item.forks}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
