import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  margin: 2.5rem 0 5rem;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const Name = styled.span`
  color: #64ffda;
  font-weight: 700;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
`;

export const Image = styled.img`
  height: 7rem;
  object-fit: cover;
  border-right: .3rem solid #64ffda;
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
`;