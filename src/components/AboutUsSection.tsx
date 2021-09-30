import styled from 'styled-components';

const AboutUsContainer = styled.div`
  background-image: url('images/about_us.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15em;
`;

const AboutUsTitle = styled.h3`
  font-weight: 800;
  font-size: 64px;
  color: ${props => props.theme.background};
  flex: 0 0 25%;
`;

const AboutUsContent = styled.span`
  margin-left: 5em;
  font-size: 20px;
  color: ${props => props.theme.background};
  flex: 0 0 60%;
  word-break: break-word;
  line-height: 30px;
`;

const AboutUsSection = () => {
  return (
    <AboutUsContainer>
      <AboutUsTitle>UNA LARGA TRAYECTORIA</AboutUsTitle>
      <AboutUsContent>
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
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutUsSection;
