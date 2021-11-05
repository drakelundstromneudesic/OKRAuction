import styled from 'styled-components';

export const Header1 = styled.div`
  color: ${props => props.theme.heading.primary};
  font-size: 2.75rem;
  font-weight: bolder;
  max-width: 100%;
  word-wrap: break-word;
`;

export const Header2 = styled.div`
  color: ${props => props.theme.heading.secondary};
  font-size: 2.25rem;
  font-weight: bold;
  max-width: 100%;
  word-wrap: break-word;
`;

export const PrimaryText = styled.div`
  color: ${props => props.theme.text.primary};
  font-size: 1.75rem;
  max-width: 100%;
  word-wrap: break-word;
`;

export const SecondaryText = styled.div`
  color: ${props => props.theme.text.secondary};
  font-size: 1.5rem;
  max-width: 100%;
  word-wrap: break-word;
`;
export const TertiaryText = styled.div`
  color: ${props => props.theme.text.tertiary};
  font-size: 1.25rem;
  max-width: 100%;
  word-wrap: break-word;
`;

export const QuaternaryText = styled.div`
  color: ${props => props.theme.text.quaternary};
  font-size: 1rem;
  max-width: 100%;
  word-wrap: break-word;
`;
