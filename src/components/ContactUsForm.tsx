import styled, { css } from 'styled-components';
import { useConstants } from '../providers/constants';
import { PrimaryButton } from './atoms/Button';
import { Flex } from './atoms/Container';
import { Input, TextArea } from './atoms/Input';
import { Text } from './atoms/Text';

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: row;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        flex-direction: column;
      `
    )}
`;

const ContactUsHeader = styled.div`
  flex: 0 0 50%;
  padding: 5em;
  background-color: ${props => props.theme.palettes.FOREGROUND.main};

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        flex: 1 0 50%;
        justify-content: center;
        padding: 4em 2em 2em;
      `
    )}
`;

const ContactUsBody = styled.div`
  flex: 0 0 50%;
  padding: 5em;
  background-color: ${props => props.theme.palettes.BASE.main};

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
  color: ${props => props.theme.palettes.BASE.main};
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
    <ContactUsContainer>
      <ContactUsHeader>
        <Text font="HEADING2" palette="ACCENT">
          CONTACTA CON NOSOTROS
        </Text>

        <Flex
          palette="BASE"
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
                palette="ACCENT"
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
      </ContactUsHeader>
      <ContactUsBody>
        <Flex
          as="form"
          direction="column"
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
          <Text palette="BASE" font="HEADING2">
            FORMULARIO
          </Text>
          <Input palette="ACCENT" font="BODY" type="text" placeholder="Nombre*" />
          <Input palette="ACCENT" font="BODY" type="mail" placeholder="Mail*" />
          <TextArea palette="ACCENT" font="BODY" placeholder="Tu mensaje" />

          <Flex
            justifyContent="space-between"
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
              palette="FOREGROUND"
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
              palette="ACCENT"
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
      </ContactUsBody>
    </ContactUsContainer>
  );
};

export default ContactUsForm;
