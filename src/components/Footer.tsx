import styled from 'styled-components';
import Logo from './Logo';

const Footer = () => {
  const Footer = styled.div`
    width: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    padding: 12px 0px 24px;
  `;

  const Column = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
  `;

  const Text = styled.div`
    color: ${props => props.theme.background};
    font-size: 16px;
  `;

  return (
    <Footer>
      <Column>
        <Logo fill="#fff" width="180px" height="80px" />
        <Text>C/ Lepanto 71, Bajo. 30510</Text>
        <Text>Yecla - Murcia</Text>
        <br />
        <Text>info@etimatic.com</Text>
        <br />
        <Text>615 599 194 / 615 599 191</Text>
      </Column>
    </Footer>
  );
};

export default Footer;
