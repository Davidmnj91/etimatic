import { css } from 'styled-components';
import { PrimaryButton } from './atoms/Button';
import { Input, TextArea } from './atoms/Input';

const ContactUsForm = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
      `}
    >
      <div
        css={css`
          flex: 0 0 50%;
          padding: 5em;
          background-color: ${props => props.theme.foreground};
        `}
      >
        <h2
          css={css`
            color: ${props => props.theme.accent};
            font-weight: 600;
            font-size: 48px;
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
          `}
        >
          <a
            css={css`
              color: ${props => props.theme.background};
              text-decoration: none;
              margin-top: 2em;
            `}
            href="https://www.google.com/maps/dir/?api=1&destination=Etimatic+Packaging"
            target="_blank"
            rel="noreferrer"
          >
            C/ Lepanto 71, Bajo. 30510
            <br />
            Yecla - Murcia
          </a>
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
          <div
            css={css`
              margin-top: 2em;
              display: flex;
              flex-direction: column;
            `}
          >
            <a
              css={css`
                text-decoration: none;
                color: ${props => props.theme.accent};
              `}
              href="tel:+34-615-599-194"
            >
              615 599 194
            </a>

            <a
              css={css`
                text-decoration: none;
                color: ${props => props.theme.accent};
              `}
              href="tel:+34-615-599-191"
            >
              615 599 191
            </a>
          </div>
        </div>
      </div>
      <div
        css={css`
          flex: 0 0 50%;
          background-color: ${props => props.theme.background};
          padding: 5em;
        `}
      >
        <form
          action="mailto:info@etimatic.com"
          method="POST"
          encType="multipart/form-data"
          name="Contactanos"
          css={css`
            display: flex;
            flex-direction: column;
            grid-gap: 2em;
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
            `}
          >
            <a
              css={css`
                font-weight: 700;
                font-size: 16px;
                text-decoration: none;
                color: ${props => props.theme.foreground};
              `}
              href="mailto:info@etimatic.com"
            >
              info@etimatic.com
            </a>
            <PrimaryButton
              css={css`
                min-width: 15em;
              `}
              type="submit"
            >
              Enviar
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
