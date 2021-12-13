import styled from 'styled-components';
import { FontNames, PaletteNames } from '../themes';

export const Text = styled.span<{
  color?: PaletteNames;
  font?: FontNames;
}>`
  ${({ font = 'BODY', theme }) => theme.text(font)};
  color: ${({ color = 'MAIN', theme }) => theme.palettes[color]};
`;
