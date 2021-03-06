import { Flex, Text } from 'design-system';
import styled, { css } from 'styled-components';

const AboutUsContainer = styled(Flex)`
  background-image: url('images/about_us.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  grid-gap: 2em;
  padding: 10em;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        padding: 5em 1em 3em;
        flex-direction: column;
      `
    )}
`;

const AboutUsSection = () => {
  return (
    <AboutUsContainer justifyContent="center" alignItems="center">
      <Text
        as="h3"
        font="HEADING1"
        color="WHITE"
        css={css`
          text-align: center;
        `}
      >
        UNA LARGA TRAYECTORIA
      </Text>
      <Text
        font="TITLE"
        color="WHITE"
        css={css`
          text-align: center;
        `}
      >
        <b>Etimatic packaging</b> es una empresa familiar que nació en el año 1986 con la finalidad de proveer al
        comercio una amplia gama de productos de <b>packaging</b> y más tarde abriendo mercado en la industria.
        <br />
        <br />
        La gama de productos es muy variada pudiendo abarcar cualquier tipo de comercio e industria. Ofrecemos
        <b>
          papel de regalo, cintas, etiquetas, bolsas, cajas, etiquetaje de todo tipo, bolsas publicitarias y papeles
          impresos. &nbsp;
        </b>
        <br />
        <br />
        Durante nuestra larga trayectoria en el sector siempre hemos tenido claro que nuestros principales objetivos
        son: dar a un <b>excelente servicio</b> a nuestros clientes una <b>calidad máxima</b>, ofrecerles
        <b>originalidad</b> cada temporada, además de un <b>servicio a medida</b>. Algo de lo cual no nos desprendemos
        en nuestra nueva etapa digital.
      </Text>
    </AboutUsContainer>
  );
};

export default AboutUsSection;
