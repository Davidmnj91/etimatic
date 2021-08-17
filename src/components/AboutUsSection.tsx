import { css } from 'styled-components';
import Logo from './Logo';

const AboutUsSection = () => {
  return (
    <div
      css={css`
        background-image: url('images/about_us.png');
        background-size: cover;
        background-position: center;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding: 10em;
        `}
      >
        <h3
          css={css`
            font-weight: 800;
            font-size: 64px;
            color: #fff;
            flex: 0 0 25%;
          `}
        >
          UNA LARGA TRAYECTORIA
        </h3>
        <span
          css={css`
            margin-left: 64px;
            font-size: 24px;
            color: #fff;
            flex: 0 0 70%;
            word-break: break-all;
            text-overflow: ellipsis;
          `}
        >
          <b>Etimatic packaging</b> es una empresa familiar que se nació en el año 1986 con la finalidad de proveer al
          comercio una amplia gama de productos de <b>packaging</b> y más tarde abriendo mercado en la industria. La
          gama de productos es muy variada pudiendo abarcar cualquier tipo de comercio e industria. Ofrecemos
          <b>
            papel de regalo, cintas, etiquetas, bolsas, cajas, etiquetaje de todo tipo, bolsas publicitarias y papeles
            impresos. &nbsp;
          </b>
          Durante nuestra larga trayectoria en el sector siempre hemos tenido claro que nuestros principales objetivos
          son: dar a un <b>excelente servicio</b> a nuestros clientes una <b>calidad máxima</b>, ofrecerles
          <b>originalidad</b> cada temporada, además de un <b>servicio a medida</b>. Algo de lo cual no nos desprendemos
          en nuestra nueva etapa digital.
        </span>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          padding-bottom: 3em;
        `}
      >
        <Logo fill="#fff" width="180px" height="80px" />

        <span
          css={css`
            margin-top: 16px;
          `}
        >
          C/ Lepanto 71, Bajo.
        </span>
        <span> 30510 Yecla - Murcia </span>
        <span
          css={css`
            margin-top: 8px;
          `}
        >
          info@etimatic.com
        </span>
        <span
          css={css`
            margin-top: 8px;
          `}
        >
          615 599 194 / 615 599 191
        </span>
      </div>
    </div>
  );
};

export default AboutUsSection;
