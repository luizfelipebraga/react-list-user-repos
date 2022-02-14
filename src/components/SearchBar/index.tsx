import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Input, SearchIcon, Box } from "./styles";

type SearchProps = {
  setRepos: any;
  setInfoUser: any;
};

export function SearchBarComponent({ setRepos, setInfoUser }: SearchProps) {
  const [repo, setRepo] = useState<string>("luizfelipebraga");

  const getUserRepos = useCallback(() => {
    api
      .get(`${repo}/repos?sort=updated&direction=desc&per_page=9`)
      .then((response) => setRepos(response.data))
      .catch((err) => console.log(err));

    api
      .get(`${repo}`)
      .then((response) => setInfoUser(response.data))
      .catch((err) => console.log(err));
  }, [repo, setRepos, setInfoUser]);

  useEffect(() => {
    getUserRepos();
  }, []);

  return (
    <Container>
      <Box>
        <Input
          onChange={(event) => setRepo(event.target.value)}
          placeholder="type the username..."
        />
        <SearchIcon size={20} onClick={getUserRepos} />
      </Box>
    </Container>
  );
}
