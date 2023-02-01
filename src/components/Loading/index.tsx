import { Loader } from "./styles";

export default function LoadingComponent() {
  return (
    <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column', gap: '1rem'}}>
      <Loader />
      <span>Carregando...</span>
    </div>
  );
}
