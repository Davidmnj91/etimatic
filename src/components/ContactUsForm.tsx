import styled, { css } from 'styled-components';
import { useConstants } from '../providers/constants';
import { PrimaryButton } from './atoms/Button';
import { Input, TextArea } from './atoms/Input';

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: row;

  ${props =>
    props.theme.mixins.mediaquery(
      'Slim',
      css`
        flex-direction: column;
      `
    )}
`;

const ContactUsHeader = styled.div`
  flex: 0 0 50%;
  padding: 5em;
  background-color: ${props => props.theme.foreground};

  ${props =>
    props.theme.mixins.mediaquery(
      'Slim',
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
  background-color: ${props => props.theme.background};

  ${props =>
    props.theme.mixins.mediaquery(
      'Slim',
      css`
        flex: 1 0 50%;
        justify-content: center;
        padding: 2em 1em 1em;
      `
    )}
`;

const ContactUsLink = styled.a`
  color: ${props => props.theme.background};
  text-decoration: none;
  margin-top: 2em;

  ${props =>
    props.theme.mixins.mediaquery(
      'Slim',
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
        <h2
          css={css`
            color: ${props => props.theme.accent};
            font-weight: 600;
            font-size: 48px;

            ${props =>
              props.theme.mixins.mediaquery(
                'Slim',
                css`
                  text-align: center;
                  font-size: 32px;
                `
              )}
          `}
        >
          CONTACTA CON NOSOTROS
        </h2>

        <div
          css={css`
            font-size: 16px;
            font-weight: 700;
            line-height: 19px;
            margin-top: 10em;
            display: flex;
            flex-direction: column;
            color: ${props => props.theme.background};

            ${props =>
              props.theme.mixins.mediaquery(
                'Slim',
                css`
                  margin-top: 20px;
                  justify-content: center;
                  font-size: 16px;
                  font-weight: 700;
                  line-height: 19px;
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
          <div
            css={css`
              margin-top: 2em;
              display: flex;
              flex-direction: column;

              ${props =>
                props.theme.mixins.mediaquery(
                  'Slim',
                  css`
                    margin-top: 1em;
                    justify-content: center;
                  `
                )}
            `}
          >
            {phones.map(({ display, callNumber }) => (
              <a
                key={display}
                css={css`
                  text-decoration: none;
                  color: ${props => props.theme.accent};

                  ${props =>
                    props.theme.mixins.mediaquery(
                      'Slim',
                      css`
                        text-align: center;
                      `
                    )}
                `}
                href={`tel:${callNumber}`}
              >
                {display}
              </a>
            ))}
          </div>
        </div>
      </ContactUsHeader>
      <ContactUsBody>
        <form
          action={`mailto:${mail}`}
          method="POST"
          encType="multipart/form-data"
          name="Contactanos"
          css={css`
            display: flex;
            flex-direction: column;
            grid-gap: 2em;

            ${props =>
              props.theme.mixins.mediaquery(
                'Slim',
                css`
                  grid-gap: 1em;
                `
              )}
          `}
        >
          <h3
            css={css`
              font-weight: 600;
              font-size: 48px;
            `}
          >
            FORMULARIO
          </h3>
          <Input type="text" placeholder="Nombre*" />
          <Input type="mail" placeholder="Mail*" />
          <TextArea placeholder="Tu mensaje" />

          <div
            css={css`
              display: flex;
              justify-content: space-between;

              ${props =>
                props.theme.mixins.mediaquery(
                  'Slim',
                  css`
                    justify-content: center;
                  `
                )}
            `}
          >
            <a
              css={css`
                font-weight: 700;
                font-size: 16px;
                text-decoration: none;
                color: ${props => props.theme.foreground};

                ${props =>
                  props.theme.mixins.mediaquery(
                    'Slim',
                    css`
                      display: none;
                    `
                  )}
              `}
              href={`mailto:${mail}`}
            >
              {mail}
            </a>
            <PrimaryButton
              css={css`
                min-width: 15em;

                ${props =>
                  props.theme.mixins.mediaquery(
                    'Slim',
                    css`
                      width: 100%;
                    `
                  )}
              `}
              type="submit"
            >
              Enviar
            </PrimaryButton>
          </div>
        </form>
      </ContactUsBody>
    </ContactUsContainer>
  );
};

export default ContactUsForm;
