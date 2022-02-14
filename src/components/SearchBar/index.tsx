import { useState } from "react";
import { api } from "../../services/api";
import { Container, Input, SearchIcon, Box } from "./styles";

type SearchProps = {
  setRepos: any;
};

export function SearchBarComponent({ setRepos }: SearchProps) {
  const [repo, setRepo] = useState<string>("luizfelipebraga");

  function getUserRepos() {
    api
      .get(`${repo}/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Box>
        <Input onChange={(event) => setRepo(event.target.value)} />
        <SearchIcon size={20} onClick={getUserRepos} />
      </Box>
    </Container>
  );
}
