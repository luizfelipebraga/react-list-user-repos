import { useState } from "react";
import { LoadMoreButton } from "../Buttons/LoadMore";
import { CardComponent } from "../CardRepo";
import { FooterComponent } from "../Footer";
import { InfosUserComponent } from "../InfoUser";
import { SearchBarComponent } from "../SearchBar";
import { Container, Grid } from "./styles";

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
        <>
        <Grid>
          {userRepo.map((repo) => {
            return (
              <CardComponent
                key={repo.id}
                url={repo.html_url}
                name={repo.name}
                description={repo.description}
                topics={repo.topics}
              />
            );
          })}
        </Grid>
      <LoadMoreButton />
      </>
      ) : (
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <strong style={{ marginLeft: '2rem', textTransform: 'uppercase' }}>not found repository</strong>
        </span>
      )}
      <FooterComponent />
    </Container>
  );
}
