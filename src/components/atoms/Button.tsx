import styled from 'styled-components';
import { DefaultPalettes } from '../../themes';

export const PrimaryButton = styled.button<{ palette: DefaultPalettes }>`
  ${props => props.theme.colour(props.palette)};
  border-radius: 4px;
  padding: 16px 48px;
  box-shadow: none;

  ${props => props.theme.text('BODY')}
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  outline: none;
  border: none;
  cursor: pointer;

  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: ${props => props.theme.palettes[props.palette].contrastText};
    color: ${props => props.theme.palettes[props.palette].main};
  }
`;
