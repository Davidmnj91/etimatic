import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useConstants } from '../providers/constants';
import { PrimaryButton } from './atoms/Button';
import { Flex } from './atoms/Container';
import { Input, TextArea } from './atoms/Input';
import { Text } from './atoms/Text';

const ContactUsContainer = styled.div<{ panelHeight: number }>`
  display: flex;
  flex-direction: row;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        height: ${props.panelHeight}px;
        flex-direction: column;
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
        margin-top: 0em;
        text-align: center;
      `
    )}
`;

const ContactUsForm = () => {
  const { mail, location, phones } = useConstants();
  const [panelHeight, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight);
    }
  }, [window]);

  return (
    <ContactUsContainer panelHeight={panelHeight}>
      <Flex
        palette="MAIN"
        direction="column"
        flex="50%"
        css={css`
          padding: 5em;

          ${props =>
            props.theme.mediaquery(
              'SLIM',
              css`
                justify-content: center;
                padding: 4em 2em 2em;
                text-align: center;
              `
            )}
        `}
      >
        <Text font="HEADING1" color="ACCENT">
          CONTACTA CON NOSOTROS
        </Text>

        <Flex
          palette="MAIN"
          font="BODY"
          direction="column"
          css={css`
            margin-top: 10em;

            ${props =>
              props.theme.mediaquery(
                'SLIM',
                css`
                  margin-top: 5em;
                `
              )}
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
        palette="WHITE"
        flex="50%"
        css={css`
          padding: 5em;

          ${props =>
            props.theme.mediaquery(
              'SLIM',
              css`
                justify-content: center;
                padding: 2em 2em 2em;
                text-align: center;
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
    </ContactUsContainer>
  );
};

export default ContactUsForm;
