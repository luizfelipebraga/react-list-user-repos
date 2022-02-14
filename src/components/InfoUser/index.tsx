import { Container, Name, Image } from "./styles";

type InfoUserProps = {
  name: string;
  avatar: string;
};

export function InfosUserComponent({ name, avatar }: InfoUserProps) {
  return (
    <Container>
      <Name>{name}</Name>
      <Image src={avatar} alt="avatar" />
    </Container>
  );
}
