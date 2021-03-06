import { useState } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../Modal';
import ContactUsForm from './ContactUsForm';

const ContactUsButton = styled.div`
  background-image: url('images/contact_us.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  cursor: pointer;

  position: fixed;
  right: 3em;
  bottom: 3em;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        right: 1em;
        bottom: 1em;
      `
    )}
`;

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ContactUsButton onClick={() => setShowModal(true)} />
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <ContactUsForm />
      </Modal>
    </>
  );
};

export default ContactUs;
