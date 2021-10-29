import styled, { css } from 'styled-components';
import { DefaultFonts, DefaultPalettes } from '../../themes';

type FormFieldProps = {
  palette: DefaultPalettes;
  font: DefaultFonts;
};

const commonFormFieldStyles = css<FormFieldProps>`
  padding: 1em;
  ${props => props.theme.text(props.font)};
  border: 2px solid ${props => props.theme.palettes[props.palette].contrastText};

  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: ${props => props.theme.palettes[props.palette].main};
    outline: none;
  }
`;

export const Input = styled.input<FormFieldProps>`
  height: 3em;

  ${commonFormFieldStyles};
`;

export const TextArea = styled.textarea<FormFieldProps>`
  min-height: 10em;
  max-width: 100%;

  ${commonFormFieldStyles};
`;
