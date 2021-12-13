import styled, { css } from 'styled-components';
import { FontNames, PaletteNames } from '../themes';

type FormFieldProps = {
  color?: PaletteNames;
  focus?: PaletteNames;
  font?: FontNames;
};

const commonFormFieldStyles = css<FormFieldProps>`
  padding: 1em;
  ${({ font = 'BODY', theme }) => theme.text(font)};
  border: 2px solid ${({ color = 'MAIN', theme }) => theme.palettes[color]};

  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: ${({ focus = 'ACCENT', theme }) => theme.palettes[focus]};
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
