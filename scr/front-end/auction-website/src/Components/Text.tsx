import styled from 'styled-components';

export const Header1 = styled.div`
  color: ${props => props.theme.heading.primary};
  font-size: 26px;
  font-weight: bold;
`;

export const Header2 = styled.div`
  color: ${props => props.theme.heading.secondary};
  font-size: 22px;
  font-weight: bold;
`;

export const PrimaryText = styled.div`
  color: ${props => props.theme.text.primary};
  font-size: 18px;
`;

export const SecondaryText = styled.div`
  color: ${props => props.theme.text.secondary};
  font-size: 16px;
`;
export const TertiaryText = styled.div`
  color: ${props => props.theme.text.tertiary};
  font-size: 14px;
`;

export const QuaternaryText = styled.div`
  color: ${props => props.theme.text.quaternary};
  font-size: 12px;
`;
