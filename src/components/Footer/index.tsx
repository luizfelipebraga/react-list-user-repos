import { Container } from "./styles";
import FooterImg from "../../assets/footerImg.svg";

export function FooterComponent() {
  return (
    <Container>
      <img src={FooterImg} alt="red person" loading="eager" />
      <a href="https://github.com/luizfelipebraga" target="_blank" rel="noreferrer">
        <span>Created By: Luiz Felipe Braga</span>
      </a>
    </Container>
  );
}
