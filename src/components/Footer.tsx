import styled, { css } from 'styled-components';
import { useConstants } from '../providers/constants';
import Logo from './Logo';

const FooterContainer = styled.div`
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

const Footer = () => {
  const { mail, location, phones } = useConstants();

  return (
    <FooterContainer>
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
          href={location.mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span>{location.address}</span>
          <span>{location.city}</span>
        </a>
        <br />
        <Text>
          <a
            css={css`
              text-decoration: none;
              margin-top: 2em;
              color: ${props => props.theme.background};
            `}
            href={`mailto:${mail}`}
          >
            {mail}
          </a>
        </Text>
        <br />
        <Text>
          {phones.map(({ display, callNumber }, index, arr) => (
            <>
              <a
                css={css`
                  text-decoration: none;
                  color: ${props => props.theme.background};
                `}
                href={`tel:${callNumber}`}
              >
                {display}
              </a>
              {arr.length - 1 !== index && <> / </>}
            </>
          ))}
        </Text>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
