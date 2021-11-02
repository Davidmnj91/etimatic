import styled from 'styled-components';
import { DefaultFonts, DefaultPalettes } from '../../themes';

export const Text = styled.label<{
  color?: DefaultPalettes;
  font?: DefaultFonts;
}>`
  ${({ font = 'BODY', theme }) => theme.text(font)};
  color: ${({ color = 'MAIN', theme }) => theme.palettes[color]};
`;