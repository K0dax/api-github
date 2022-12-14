import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 0.2rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  font-weight: normal;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Inner = styled.div`
  padding: 0.2rem 1rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  margin-left: -15px;
  align-items: center;
  line-height: 1.5;

  svg {
    margin-right: 10px;
  }
`;
// margin-left pra corrigir espaço bugado caso as svg's não resolvam deixarei com a mesma margin-left
