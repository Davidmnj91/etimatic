import styled from 'styled-components';
import { FontNames, PaletteNames } from '../themes';

export const PrimaryButton = styled.button<{
  background?: PaletteNames;
  color?: PaletteNames;
  font?: FontNames;
}>`
  ${({ background = 'ACCENT', color = 'MAIN', theme }) =>
    theme.colour(background, color)};
  border: 2px solid ${(props) => props.theme.palettes.ACCENT};
  border-radius: 4px;
  padding: 16px 48px;
  box-shadow: none;

  ${({ font = 'HIGHLIGHT', theme }) => theme.text(font)}
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  outline: none;
  cursor: pointer;

  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.palettes.ACCENT};
    color: ${(props) => props.theme.palettes.ACCENT};
  }
`;
