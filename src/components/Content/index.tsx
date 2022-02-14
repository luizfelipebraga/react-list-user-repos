import { useState } from "react"
import { SearchBarComponent } from "../SearchBar";
import { Container, Grid } from "./styles";

type RepoProps = {
  id: number;
  name: string;
  description: string;
}

export function ContentComponent() {

  const [userRepo, setUserRepo] = useState<RepoProps[]>([]);

  return (
    <Container>
      <SearchBarComponent setRepos={setUserRepo}/>

      <Grid>
        {
          userRepo.map(repo => {
            console.log(repo.name);
          })
        }
      </Grid>
    </Container>
  )
}
