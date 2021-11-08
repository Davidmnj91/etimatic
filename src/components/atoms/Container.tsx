import styled, { css, CSSProperties } from 'styled-components';
import { FontNames, PaletteNames } from '../../themes';

type ContainerProps = {
  palette?: PaletteNames;
  font?: FontNames;
};

type FlexProps = {
  direction?: CSSProperties['flexDirection'];
  wrap?: CSSProperties['flexWrap'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flex?: CSSProperties['flex'];
};

export const Container = styled.div<{
  palette?: PaletteNames;
  font?: FontNames;
}>`
  ${props => props.palette && props.theme.colour(props.palette)};
  ${props => props.font && props.theme.text(props.font)};
`;

export const Flex = styled.div<ContainerProps & FlexProps>`
  display: flex;

  ${props => props.palette && props.theme.colour(props.palette)};
  ${props => props.font && props.theme.text(props.font)};

  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `};

  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: ${wrap};
    `};

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `};

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};

  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `};
`;
