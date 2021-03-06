import { Flex, Logo, Text } from 'design-system';
import { css } from 'styled-components';
import { useConstants } from '../config/constants';

const Footer = () => {
  const { mail, location, phones } = useConstants();

  return (
    <Flex
      justifyContent="center"
      css={css`
        background-color: #000;
        padding: 12px 0px 24px;
      `}
    >
      <Flex direction="column" wrap="nowrap" justifyContent="space-around" alignItems="center">
        <Logo fill="#fff" width="180px" height="80px" />
        <Text
          font="BODY"
          color="WHITE"
          as="a"
          css={css`
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
        </Text>
        <br />
        <Text
          font="BODY"
          color="WHITE"
          as="a"
          css={css`
            text-decoration: none;
            margin-top: 2em;
          `}
          href={`mailto:${mail}`}
        >
          {mail}
        </Text>
        <br />
        {phones.map(({ display, callNumber }, index, arr) => (
          <div key={callNumber}>
            <Text
              font="BODY"
              color="WHITE"
              as="a"
              css={css`
                text-decoration: none;
              `}
              href={`tel:${callNumber}`}
            >
              {display}
            </Text>
            {arr.length - 1 !== index && <> / </>}
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

export default Footer;
