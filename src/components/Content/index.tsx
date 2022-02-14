import { useState } from "react";
import { CardComponent } from "../CardRepo";
import { InfosUserComponent } from "../InfoUser";
import { SearchBarComponent } from "../SearchBar";
import { Container, Grid } from "./styles";

type RepoProps = {
  id: number;
  name: string;
  description: string;
};

type InfoUser = {
  name: string;
  avatar_url: string;
}

export function ContentComponent() {
  const [userRepo, setUserRepo] = useState<RepoProps[]>([]);
  const [infoUser, setInfoUser] = useState<InfoUser>({name: '', avatar_url: ''});

  return (
    <Container>
      <SearchBarComponent setRepos={setUserRepo} setInfoUser={setInfoUser} />
      <InfosUserComponent name={infoUser.name} avatar={infoUser.avatar_url} />
      <Grid>
        {userRepo.map((repo) => {
          return (
            <CardComponent
              key={repo.id}
              name={repo.name}
              description={repo.description}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
