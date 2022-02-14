import { Container, Description, Languages, Title, Box } from "./styles";

type CardProps = {
  name: string;
  url: string;
  description: string;
  topics: string[];
};

export function CardComponent(props: CardProps) {
  let slideAr: string[] = [];

  return (
    <Container href={props.url} target="_blank" rel="noopener">
      <Box>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
      </Box>
      <Languages>
        {props.topics.map((topic) => {
          return <span>{topic}</span>;
        })}
      </Languages>
    </Container>
  );
}
