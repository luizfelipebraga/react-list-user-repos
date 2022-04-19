import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 6rem 0px 0px;

  img {
    height: 5rem;
    width: 5rem;
  }

  span {
    transition: all 200ms ease-in-out;
    &:hover{
      color: #64ffda;
    }
  }
`;