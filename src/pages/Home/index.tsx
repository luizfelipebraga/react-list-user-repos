import { lazy, Suspense } from "react";
import { Container } from "./styles";

const ContentComponent = lazy(() => import('../../components/Content'))
const renderLoader = () => <p style={{ color: "white" }}>Loading</p>;

export function Home() {

  return (
    <Suspense fallback={renderLoader()}>
      <Container>
        <ContentComponent />
      </Container>
    </Suspense>
  );
}
