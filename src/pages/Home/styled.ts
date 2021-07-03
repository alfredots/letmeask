import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`

export const Aside = styled.aside`
  flex: 7;

  background: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white.main};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: ${(props) => props.theme.sizes['size-120']}
    ${(props) => props.theme.sizes['size-80']};

  img {
    max-width: ${(props) => props.theme.sizes['size-320']};
  }

  strong {
    font: ${(props) => props.theme.fontWeight[700]}
      ${(props) => props.theme.sizes['size-36']}
      ${(props) => props.theme.fontFamily.poppins};
    line-height: ${(props) => props.theme.sizes['size-42']};
    margin-top: ${(props) => props.theme.sizes['size-16']};
  }

  p {
    font-size: ${(props) => props.theme.sizes['size-24']};
    line-height: ${(props) => props.theme.sizes['size-32']};
    margin-top: ${(props) => props.theme.sizes['size-16']};
    color: ${(props) => props.theme.colors.white.background};
  }
`

export const Main = styled.main`
  flex: 8;

  padding: 0 ${(props) => props.theme.sizes['size-32']};

  display: flex;
  align-items: center;
  justify-content: center;
`
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => props.theme.sizes['size-320']};
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: ${(props) => props.theme.sizes['size-24']};
    margin: ${(props) => props.theme.sizes['size-64']} 0
      ${(props) => props.theme.sizes['size-24']};
    font-family: 'Poppins', sans-serif;
  }

  form {
    input {
      height: ${(props) => props.theme.sizes['size-50']};
      border-radius: ${(props) => props.theme.sizes['size-8']};
      padding: 0 ${(props) => props.theme.sizes['size-16']};
      background: ${(props) => props.theme.colors.white.main};
      border: 1px solid ${(props) => props.theme.colors.gray.medium};
    }

    button {
      margin-top: ${(props) => props.theme.sizes['size-16']};
    }

    button,
    input {
      width: 100%;
    }
  }

  p {
    font-size: ${(props) => props.theme.sizes['size-14']};
    color: ${(props) => props.theme.colors.gray.dark};
    margin-top: ${(props) => props.theme.sizes['size-16']};

    a {
      color: ${(props) => props.theme.colors.pink.dark};
    }
  }
`
export const CreateRoomBtn = styled.button`
  margin-top: ${(props) => props.theme.sizes['size-64']};
  height: ${(props) => props.theme.sizes['size-50']};
  border-radius: ${(props) => props.theme.sizes['size-8']};
  font-weight: ${(props) => props.theme.fontWeight[500]};
  background: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white.main};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: ${(props) => props.theme.sizes['size-8']};
  }

  &:hover {
    filter: brightness(0.9);
  }
`

export const Separator = styled.div`
  font-size: ${(props) => props.theme.sizes['size-14']};
  color: ${(props) => props.theme.colors.gray.medium};

  margin: ${(props) => props.theme.sizes['size-32']} 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${(props) => props.theme.colors.gray.medium};
    margin-right: ${(props) => props.theme.sizes['size-16']};
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${(props) => props.theme.colors.gray.medium};
    margin-left: ${(props) => props.theme.sizes['size-16']};
  }
`
