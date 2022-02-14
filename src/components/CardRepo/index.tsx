import { Container, Description, Title } from "./styles"

type CardProps = {
  name: string;
  description: string;
}

export function CardComponent(props: CardProps) {
  return (
    <Container>
      <Title>{props.name}</Title>
      <Description>{props.description}</Description>
    </Container>
  )
}
