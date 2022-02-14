import { useState } from "react";
import { CardComponent } from "../CardRepo";
import { FooterComponent } from "../Footer";
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
};

export function ContentComponent() {
  const [userRepo, setUserRepo] = useState<RepoProps[]>([]);
  const [infoUser, setInfoUser] = useState<InfoUser>({
    name: "",
    avatar_url: "",
  });

  return (
    <Container>
      <SearchBarComponent setRepos={setUserRepo} setInfoUser={setInfoUser} />
      <InfosUserComponent name={infoUser.name} avatar={infoUser.avatar_url} />
      {userRepo.length > 1 ? (
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
      ) : (
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <strong style={{marginLeft: '2rem', textTransform: 'uppercase'}}>not found</strong>
        </span>
      )}
      <FooterComponent/>
    </Container>
  );
}
