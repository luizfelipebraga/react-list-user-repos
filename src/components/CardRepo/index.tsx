import { Container, Description, Languages, Title, Box } from "./styles";

type CardProps = {
  name: string;
  url: string;
  description: string;
  topics: string[];
};

export function CardComponent(props: CardProps) {
  return (
    <Container href={props.url} target="_blank" rel="noopener">
      <Box>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
      </Box>
      <Languages>
        {props.topics.map((topic, index) => {
          return <span key={index}>{topic}</span>;
        })}
      </Languages>
    </Container>
  );
}
