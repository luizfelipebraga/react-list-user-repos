import { useState } from "react";
import { CardComponent } from "../CardRepo";
import { FooterComponent } from "../Footer";
import { InfosUserComponent } from "../InfoUser";
import LoadingComponent from "../Loading";
import { DataUser, SearchBarComponent } from "../SearchBar";
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

export default function ContentComponent() {
  const [userRepo, setUserRepo] = useState<RepoProps[]>([]);
  const [infoUser, setInfoUser] = useState<InfoUser>({
    name: "",
    avatar_url: "",
  });
  const [isLoading, setLoading] = useState<boolean>();

  const handleDataReceived = (data: DataUser | undefined) => {
    setUserRepo(data ? data.reponseUserRepo : []);
    setInfoUser(data!! && data.reponseUserInfo);
  };

  return (
    <Container>
      <SearchBarComponent
        onDataReceived={handleDataReceived}
        onLoading={setLoading}
      />

      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <InfosUserComponent
            name={infoUser.name}
            avatar={infoUser.avatar_url}
          />
          {userRepo?.length > 1 ? (
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
              {/* <LoadMoreButton /> */}
            </>
          ) : (
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <strong
                style={{ marginLeft: "2rem", textTransform: "uppercase" }}
              >
                not found repository
              </strong>
            </span>
          )}
        </>
      )}

      <FooterComponent />
    </Container>
  );
}
