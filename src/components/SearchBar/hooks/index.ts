import { getReposUser, getUserInfo } from "../../../api/api";

export const useUser = async (username: string) => {
  if (username.trim() === "") return;

  const trimUsername = username.trim();

  const reponseUserRepo = await getReposUser(trimUsername).catch((error) =>
    console.error(error)
  );
  const reponseUserInfo = await getUserInfo(trimUsername).catch((error) =>
    console.error(error)
  );

  return { reponseUserRepo, reponseUserInfo };
};
