import { useState } from 'react';
import styled, { css } from 'styled-components';
import { PrimaryButton } from './atoms/Button';
import ContactUsForm from './ContactUsForm';
import Modal from './Modal';

const HeroContainer = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  padding: 5em 5em 0;
  width: 100%;
  overflow: hidden;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        display: flex;
        flex-direction: column;
        padding: 0em 1em;
      `
    )}
`;

const TextContainer = styled.div`
  position: absolute;
  top: -25%;
  left: 0;
  background-image: url('images/home_titulo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  height: 100%;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        top: -30%;
      `
    )}
`;

const BagImage = styled.div`
  position: absolute;
  background-image: url('images/bag_home.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  opacity: 0.85;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        top: 35%;
        left: 50%;
        transform: translateX(-50%);
        width: 150%;
        height: calc(100% - 35%);
        background-size: cover;
      `
    )}
`;

const CTA = styled(PrimaryButton)`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        top: 80%;
        width: 230px;
      `
    )}
`;

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <HeroContainer>
      <TextContainer />
      <BagImage />
      <CTA onClick={() => setShowModal(true)}>Necesito Packaging</CTA>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <ContactUsForm />
      </Modal>
    </HeroContainer>
  );
};

export default Hero;
