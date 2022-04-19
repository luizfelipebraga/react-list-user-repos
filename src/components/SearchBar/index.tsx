import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Input, SearchIcon, Box } from "./styles";
import {useLoading} from 'react-hook-loading'

type RepoProps = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
};

type InfoUser = {
  name: string;
  avatar_url: string;
};

type SearchProps = {
  setRepos: React.Dispatch<React.SetStateAction<RepoProps[]>>;
  setInfoUser: React.Dispatch<React.SetStateAction<InfoUser>>;
};


export function SearchBarComponent({ setRepos, setInfoUser }: SearchProps) {
  const [username, setUsername] = useState<string>("luizfelipebraga");

  const getUserRepos = useCallback(() => {

    if(username.trim() === '') return;

    const trimUsername = username.trim();

    api
      .get(`${trimUsername}/repos?sort=updated&per_page=9`)
      .then((response) => setRepos(response.data))
      .catch((err) => console.error(err))

    api
      .get(`${trimUsername}`)
      .then((response) => setInfoUser(response.data))
      .catch((err) => console.error(err))
  }, [username, setRepos, setInfoUser]);

  useEffect(() => {
    getUserRepos();
  }, []);

  return (
    <Container>
      <Box>
        <Input
          onChange={(event) => setUsername(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' && getUserRepos()}
          placeholder="search for username..."
        />
        <SearchIcon size={20} onClick={getUserRepos} />
      </Box>
    </Container>
  );
}
