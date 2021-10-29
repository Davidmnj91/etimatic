import styled from 'styled-components';
import { DefaultFonts, DefaultPalettes } from '../../themes';

export const Text = styled.label<{
  palette: DefaultPalettes;
  font: DefaultFonts;
}>`
  ${props => props.theme.text(props.font)};
  color: ${props => props.theme.palettes[props.palette].contrastText};
`;
