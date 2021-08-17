import styled from 'styled-components';
import Logo from './Logo';

const Footer = () => {
  const Footer = styled.div`
    width: 100%;
    color: ${props => props.theme.background};
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-gap: 30px;
  `;

  const Column = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: flex-end;
    text-align: right;
  `;

  const Row = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;

  const Text = styled.div`
    color: ${props => props.theme.background};
    font-size: 8pt;
  `;

  const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.background};
    font-size: 8pt;
  `;

  return (
    <Footer>
      <Column>
        <Logo fill="#fff" height="50px" width="110px" />
        <Text>C/ Lepanto 71, Bajo. 30510</Text>
        <Text>Yecla - Murcia</Text>
        <br />
        <Text>info@etimatic.com</Text>
        <br />
        <Text>615 599 194 / 615 599 191</Text>
      </Column>
      <Column>
        <Link href="/">QUIENES SOMOS </Link>
        <Link href="/">VENTAS DIRECTAS</Link>
        <Link href="/">INFO Y AYUDA</Link>
        <Link href="/">COMPRAR POR TELÉFONO</Link>
        <Link href="/">PACKAGING</Link>
      </Column>
      <Column>
        <Row>
          <Column>
            <input placeholder="Introduce tu email" />
            <Text>Recibe nuestras noticias y ofertas</Text>
          </Column>
          <button>Subscribir</button>
        </Row>
      </Column>
    </Footer>
  );
};

export default Footer;
