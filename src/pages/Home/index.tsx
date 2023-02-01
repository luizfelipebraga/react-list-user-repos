import { lazy, Suspense } from "react";
import LoadingComponent from "../../components/Loading";
import { Container } from "./styles";

const ContentComponent = lazy(() => import('../../components/Content'))

export function Home() {

  return (
    <Suspense fallback={LoadingComponent}>
      <Container>
        <ContentComponent />
      </Container>
    </Suspense>
  );
}
