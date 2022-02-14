import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Input, SearchIcon, Box } from "./styles";

type SearchProps = {
  setRepos: any;
  setInfoUser: any;
};

export function SearchBarComponent({ setRepos, setInfoUser }: SearchProps) {
  const [username, setUsername] = useState<string>("luizfelipebraga");

  const getUserRepos = useCallback(() => {

    if(username.trim() === '') return;

    const trimUsername = username.trim();

    api
      .get(`${trimUsername}/repos?sort=updated&per_page=9`)
      .then((response) => setRepos(response.data))
      .catch((err) => console.log(err));

    api
      .get(`${trimUsername}`)
      .then((response) => setInfoUser(response.data))
      .catch((err) => console.log(err));
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
