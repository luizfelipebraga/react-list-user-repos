import { useEffect, useState } from "react";
import { Container, Input, SearchIcon, Box } from "./styles";
import { getReposUser, getUserInfo } from "../../api/api";
import { toast } from "react-toastify";

interface SearchProps {
  onDataReceived: (data: DataUser | undefined) => void;
  onLoading: (isLoading: boolean) => void;
}

type RepoProps = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
}[];

type InfoUser = {
  name: string;
  avatar_url: string;
};

export type DataUser = {
  reponseUserRepo: RepoProps;
  reponseUserInfo: InfoUser;
};

export function SearchBarComponent({ onDataReceived, onLoading }: SearchProps) {
  const [username, setUsername] = useState<string>("luizfelipebraga");

  const FetchData = async () => {
    try {
      onLoading(true);
      const [repos, userInfo] = await Promise.all([
        getReposUser(username.trim()),
        getUserInfo(username.trim()),
      ]);

      let storeReponse: DataUser = {
        reponseUserRepo: repos,
        reponseUserInfo: userInfo,
      };

      onDataReceived(storeReponse);
      onLoading(false);

      toast.success(`Usuário ${storeReponse.reponseUserInfo.name} encontrado!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return storeReponse;
    } catch (error) {
      console.error(error);
      onLoading(false);
      toast.error("Usuário não encontrado!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <Container>
      <Box>
        <Input
          onChange={(event) => setUsername(event.target.value)}
          onKeyPress={(event) => event.key === "Enter" && FetchData()}
          placeholder="Search for username..."
        />
        <SearchIcon size={20} onClick={FetchData} />
      </Box>
    </Container>
  );
}
