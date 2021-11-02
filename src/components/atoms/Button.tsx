import styled from 'styled-components';
import { DefaultFonts, DefaultPalettes } from '../../themes';

export const PrimaryButton = styled.button<{
  background?: DefaultPalettes;
  color?: DefaultPalettes;
  font?: DefaultFonts;
}>`
  ${({ background = 'ACCENT', color = 'MAIN', theme }) => theme.colour(background, color)};
  border-radius: 4px;
  padding: 16px 48px;
  box-shadow: none;

  ${({ font = 'HIGHLIGHT', theme }) => theme.text(font)}
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  outline: none;
  border: none;
  cursor: pointer;

  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    ${({ background = 'MAIN', color = 'ACCENT', theme }) => theme.colour(background, color)};
  }
`;
