import axios from "axios";
import api from "./api";

const resource = '/users/'

async function listUserInfo (user) {
    const {data} =  await api.get(resource + user);
    return data
}

async function listUserRepos (user) {
    const {data} = await api.get(resource + user + "/repos")
    return data
}

export { listUserInfo }
export { listUserRepos }