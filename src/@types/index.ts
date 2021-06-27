export interface APIUser {
    login: string;
    name: string;
    followers: number;
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
    stargazers_count: number;

}