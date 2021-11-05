import styled from 'styled-components';
import { PrimaryText, SecondaryText } from './Text';

export type FormFieldProps = {
  readonly errors?: any;
};

export const Label = styled(PrimaryText).attrs(({ errors = false }: FormFieldProps) => ({ errors: errors }))`
  ${props => props.errors && `color: ${props.theme.text.negative};`}
  display: block;
`;

export const DataField = styled.input.attrs(({ errors = false }: FormFieldProps) => ({ errors: errors }))`
  ${props => (props.errors ? `color: ${props.theme.text.negative};` : `color: ${props.theme.text.primary}; `)}
  ${props =>
    props.errors ? `border-color: ${props.theme.text.negative};` : `border-color: ${props.theme.text.primary}`}
    background-color: ${props => props.theme.background.layerOne};
  padding: 5px;
  width: 176px;
  height: 24px;
  border-radius: 8px;
  border-width: 1px;
  outline: none;
`;

export const TextAreaField = styled.textarea.attrs(({ errors = false }: FormFieldProps) => ({ errors: errors }))`
  ${props => (props.errors ? `color: ${props.theme.text.negative};` : `color: ${props.theme.text.primary}; `)}
  ${props =>
    props.errors ? `border-color: ${props.theme.text.negative};` : `border-color: ${props.theme.text.primary}`}
  background-color: ${props => props.theme.background.layerOne};
  padding: 5px;
  width: 176px;
  height: 72px;
  border-radius: 8px;
  border-width: 1px;
  outline: none;
`;

export const HelperText = styled(SecondaryText).attrs(({ errors = false }: FormFieldProps) => ({ errors: errors }))`
  ${props => props.errors && `color: ${props.theme.text.negative};`}
  display: block;
`;
