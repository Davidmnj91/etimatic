import styled, { css, CSSProperties } from 'styled-components';
import { DefaultFonts, DefaultPalettes } from '../../themes';

type ContainerProps = {
  palette?: DefaultPalettes;
  font?: DefaultFonts;
};

type FlexProps = {
  direction?: CSSProperties['flexDirection'];
  wrap?: CSSProperties['flexWrap'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flex?: CSSProperties['flex'];
};

export const Container = styled.div<{
  palette?: DefaultPalettes;
  font?: DefaultFonts;
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
