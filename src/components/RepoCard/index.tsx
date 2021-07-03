import React from "react";
import "./styles.css";
import { RiBookMarkLine, RiStarSLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard = (props: Props) => {
  const languageClass = props.language
    ? props.language.toLocaleLowerCase()
    : "other";

  return (
    <div className="repoCard">
      <div className="topSide">
        <header>
          <RiBookMarkLine className="icon" />
          <a
            href={`https://github.com/${props.username}/${props.reponame}`}
            target="_blank" 
          >
            {props.reponame}
          </a>
        </header>
        <p>{props.description}</p>
      </div>
      <div className="botSide">
        <ul>
          <li>
            <div className={`language ${languageClass}`}></div>
            <span>{props.language}</span>
          </li>
          <li>
            <RiStarSLine className="icon" />
            <span>{props.stars}</span>
          </li>
          <li>
            <AiOutlineFork className="icon" />
            <span>{props.forks}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RepoCard;
