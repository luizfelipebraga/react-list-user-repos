import { api } from "../services/api";

export async function getReposUser(username: string) {
  const res = await api.get(`${username}/repos?sort=updated&per_page=9`);

  return res.data;
}

export async function getUserInfo(username: string) {
  const res = await api.get(`${username}`);

  return res.data;
}
