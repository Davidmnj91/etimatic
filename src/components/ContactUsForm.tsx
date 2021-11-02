import styled, { css } from 'styled-components';
import { useConstants } from '../providers/constants';
import { PrimaryButton } from './atoms/Button';
import { Flex } from './atoms/Container';
import { Input, TextArea } from './atoms/Input';
import { Text } from './atoms/Text';

const ContactUsBody = styled.div`
  flex: 0 0 50%;
  padding: 5em;
  background-color: ${props => props.theme.palettes.WHITE};

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        flex: 1 0 50%;
        justify-content: center;
        padding: 2em 1em 1em;
      `
    )}
`;

const ContactUsLink = styled.a`
  color: ${props => props.theme.palettes.WHITE};
  text-decoration: none;
  margin-top: 2em;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        margin-top: 1em;
        text-align: center;
      `
    )}
`;

const ContactUsForm = () => {
  const { mail, location, phones } = useConstants();
  return (
    <Flex
      direction="row"
      css={css`
        ${props =>
          props.theme.mediaquery(
            'SLIM',
            css`
              flex-direction: column;
            `
          )}
      `}
    >
      <Flex
        palette="MAIN"
        direction="column"
        flex="0 0 50%"
        css={css`
          padding: 5em;

          ${props =>
            props.theme.mediaquery(
              'SLIM',
              css`
                flex: 1 0 50%;
                justify-content: center;
                padding: 4em 2em 2em;
              `
            )}
        `}
      >
        <Text font="HEADING2" color="ACCENT">
          CONTACTA CON NOSOTROS
        </Text>

        <Flex
          palette="MAIN"
          font="BODY"
          direction="column"
          css={css`
            margin-top: 10em;
          `}
        >
          <ContactUsLink href={location.mapsUrl} target="_blank" rel="noreferrer">
            {location.address}
            <br />
            {location.city}
          </ContactUsLink>
          <ContactUsLink href={`mailto:${mail}`}>{mail}</ContactUsLink>
          <Flex
            direction="column"
            css={css`
              margin-top: 2em;

              ${props =>
                props.theme.mediaquery(
                  'SLIM',
                  css`
                    margin-top: 1em;
                    justify-content: center;
                  `
                )}
            `}
          >
            {phones.map(({ display, callNumber }) => (
              <Text
                as="a"
                font="BODY"
                color="ACCENT"
                key={display}
                css={css`
                  text-decoration: none;

                  ${props =>
                    props.theme.mediaquery(
                      'SLIM',
                      css`
                        text-align: center;
                      `
                    )}
                `}
                href={`tel:${callNumber}`}
              >
                {display}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flex="0 0 50%"
        palette="WHITE"
        css={css`
          padding: 5em;

          ${props =>
            props.theme.mediaquery(
              'SLIM',
              css`
                flex: 1 0 50%;
                justify-content: center;
                padding: 4em 2em 2em;
              `
            )}
        `}
      >
        <Flex
          as="form"
          direction="column"
          flex="1 0 auto"
          action={`mailto:${mail}`}
          method="POST"
          encType="multipart/form-data"
          name="Contactanos"
          css={css`
            grid-gap: 2em;

            ${props =>
              props.theme.mediaquery(
                'SLIM',
                css`
                  grid-gap: 1em;
                `
              )}
          `}
        >
          <Text color="MAIN" font="HEADING1">
            FORMULARIO
          </Text>
          <Input type="text" placeholder="Nombre*" />
          <Input type="mail" placeholder="Mail*" />
          <TextArea placeholder="Tu mensaje" />

          <Flex
            justifyContent="space-between"
            alignItems="center"
            css={css`
              ${props =>
                props.theme.mediaquery(
                  'SLIM',
                  css`
                    justify-content: center;
                  `
                )}
            `}
          >
            <Text
              as="a"
              font="BODY"
              color="MAIN"
              css={css`
                text-decoration: none;

                ${props =>
                  props.theme.mediaquery(
                    'SLIM',
                    css`
                      display: none;
                    `
                  )}
              `}
              href={`mailto:${mail}`}
            >
              {mail}
            </Text>
            <PrimaryButton
              css={css`
                min-width: 15em;

                ${props =>
                  props.theme.mediaquery(
                    'SLIM',
                    css`
                      width: 100%;
                    `
                  )}
              `}
              type="submit"
            >
              Enviar
            </PrimaryButton>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactUsForm;
