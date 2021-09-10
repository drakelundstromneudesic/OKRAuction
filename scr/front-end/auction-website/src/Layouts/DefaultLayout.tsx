import styled from 'styled-components';

export const DefaultLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => props.theme.background.color};
`;
