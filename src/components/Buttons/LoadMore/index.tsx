import { AnchorHTMLAttributes } from "react"
import { Container, Button } from "./styles";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function LoadMoreButton(props: ButtonProps) {
  return (
    <Container>
      <Button {...props}>Load More</Button>
    </Container>
  )
}
