export interface APIUser {
  login: string;
  name: string;
  followers: number;
  following: string;
  public_repos: number;
  avatar_url: string;
  email?: string;
  location?: string;
  bio: string;
}

export interface APIRepo {
  name: string;
  owner: {
    login: string;
  };
  description: string;
  language: string;
  stargazers_count: number;
  forks: number;
}
