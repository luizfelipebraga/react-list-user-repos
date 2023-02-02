import { api } from "../services/api";

const controller = new AbortController();

export async function getReposUser(username: string) {
  const res = await api.get(`${username}/repos?sort=updated&per_page=9`, {
    signal: controller.signal,
  });

  return res.data;
}

export async function getUserInfo(username: string) {
  const res = await api.get(`${username}`, {
    signal: controller.signal,
  });

  return res.data;
}
