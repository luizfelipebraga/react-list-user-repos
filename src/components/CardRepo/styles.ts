import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-direction: column;
  max-width: 500px;
  min-height: 300px;
  border-radius: 2px;
  padding: 2rem 1.75rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;
  background: rgb(24, 24, 26);
  box-shadow: rgb(15 15 16 / 91%) 0px 10px 30px -15px;

  &:hover {
    transform: translateY(-3px);
    span {
      color: #64ffda;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
`;

export const Title = styled.span`
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 700;
  color: #f8f8f8;
`;

export const Description = styled.p`
  color: rgb(199, 195, 195);
  font-size: clamp(14px, 2vw, 10px);
  line-height: 25px;
`;

export const Languages = styled.div`
  display: flex;
  align-items: flex-end;
  gap: .6rem;
  flex-wrap: wrap;


  span {
    font-size: .8rem;
  }
`;
