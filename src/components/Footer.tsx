import { css } from 'styled-components';
import { useConstants } from '../providers/constants';
import { Flex } from './atoms/Container';
import { Text } from './atoms/Text';
import Logo from './svgs/Logo';

const Footer = () => {
  const { mail, location, phones } = useConstants();

  return (
    <Flex
      justifyContent="center"
      css="css`
    background-color: #000;
    padding: 12px 0px 24px;
    `"
    >
      <Flex direction="column" wrap="nowrap" justifyContent="space-around" alignItems="center">
        <Logo fill="#fff" width="180px" height="80px" />
        <a
          css={css`
            color: ${props => props.theme.palettes.BASE.main};
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
        <Text
          font="BODY"
          palette="BASE"
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
          <>
            <Text
              font="BODY"
              palette="BASE"
              as="a"
              css={css`
                text-decoration: none;
              `}
              href={`tel:${callNumber}`}
            >
              {display}
            </Text>
            {arr.length - 1 !== index && <> / </>}
          </>
        ))}
      </Flex>
    </Flex>
  );
};

export default Footer;
