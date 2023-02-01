import { useEffect, useState } from "react";
import { Container, Input, SearchIcon, Box } from "./styles";
import { useUser } from "./hooks";

interface SearchProps {
  onDataReceived: (data: DataUser | undefined) => void;
  onLoading: (isLoading: boolean) => void;
}

type RepoProps = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
}[];

type InfoUser = {
  name: string;
  avatar_url: string;
};

export type DataUser = {
  reponseUserRepo: RepoProps;
  reponseUserInfo: InfoUser;
};

export function SearchBarComponent({ onDataReceived, onLoading }: SearchProps) {
  const [username, setUsername] = useState<string>("luizfelipebraga");

  const FetchData = async () => {
    onLoading(true);
    const data = await useUser(username);
    onDataReceived(data);
    onLoading(false);
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <Container>
      <Box>
        <Input
          onChange={(event) => setUsername(event.target.value)}
          onKeyPress={(event) => event.key === "Enter" && FetchData()}
          placeholder="Search for username..."
        />
        <SearchIcon size={20} onClick={FetchData} />
      </Box>
    </Container>
  );
}
