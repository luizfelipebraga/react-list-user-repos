import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  max-width: 30rem;
  margin: 0px auto;

  padding: 1.5rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #000;

  padding: 1rem 0;
  border-radius: .5rem;
  margin-bottom: 1rem;
  background-color: #fff;

  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  width: 100%;
  
`;

export const Input = styled.input`
  flex: 1;
  padding-left: 1.5rem;
  font-size: 1.1rem;
`;

export const SearchIcon = styled(BsSearch)`
  cursor: pointer;
  margin-right: 1rem;
`;
