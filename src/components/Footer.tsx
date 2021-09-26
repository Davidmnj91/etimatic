import styled, { css } from 'styled-components';
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
        <a
          css={css`
            color: ${props => props.theme.background};
            text-decoration: none;
            margin-top: 2em;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
          href="https://www.google.com/maps/dir/?api=1&destination=Etimatic+Packaging"
          target="_blank"
          rel="noreferrer"
        >
          <span>C/ Lepanto 71, Bajo. 30510</span>
          <span>Yecla - Murcia</span>
        </a>
        <br />
        <Text>
          <a
            css={css`
              text-decoration: none;
              margin-top: 2em;
              color: ${props => props.theme.background};
            `}
            href="mailto:info@etimatic.com"
          >
            info@etimatic.com
          </a>
        </Text>
        <br />
        <Text>
          <a
            css={css`
              text-decoration: none;
              color: ${props => props.theme.background};
            `}
            href="tel:+34-615-599-194"
          >
            615 599 194
          </a>
          <span> / </span>
          <a
            css={css`
              text-decoration: none;
              color: ${props => props.theme.background};
            `}
            href="tel:+34-615-599-191"
          >
            615 599 191
          </a>
        </Text>
      </Column>
    </Footer>
  );
};

export default Footer;
