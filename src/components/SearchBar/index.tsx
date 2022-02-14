import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Input, SearchIcon, Box } from "./styles";

type SearchProps = {
  setRepos: any;
};

export function SearchBarComponent({ setRepos }: SearchProps) {
  const [repo, setRepo] = useState<string>("luizfelipebraga");

  const getUserRepos = useCallback(() => {
    api
      .get(`${repo}/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((err) => console.log(err));
  }, [repo, setRepos]);

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
