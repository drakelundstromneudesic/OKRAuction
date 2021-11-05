import styled from 'styled-components';

const GenericButton = styled.button`
  font-size: 16px;
  margin: 3px;
  border: 2px solid;
  border-radius: 50px;
  padding: 4px 12px;
  width: fit-content;
`;

export const PrimaryButton = styled(GenericButton)`
  background-color: ${props => props.theme.button.background.primary};
  color: ${props => props.theme.button.text.primary};
  border-color: ${props => props.theme.button.border.primary};
`;

export const SecondaryButton = styled(GenericButton)`
  background-color: ${props => props.theme.button.background.secondary};
  color: ${props => props.theme.button.text.secondary};
  border-color: ${props => props.theme.button.border.secondary};
`;

export const NegativeButton = styled(GenericButton)`
  background-color: ${props => props.theme.button.background.negative};
  color: ${props => props.theme.button.text.negative};
  border-color: ${props => props.theme.button.border.negative};
`;
