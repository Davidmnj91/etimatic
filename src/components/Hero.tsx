import { useState } from 'react';
import styled, { css } from 'styled-components';
import { PrimaryButton } from './atoms/Button';
import ContactUsForm from './ContactUsForm';
import Modal from './Modal';

const HeroContainer = styled.div`
  position: relative;
  height: calc(100vh - 80px - 5em);
  margin: 5em 5em 0;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        display: flex;
        flex-direction: column;
        margin: 0em 1em;
      `
    )}
`;

const TextContainer = styled.div`
  position: absolute;
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
        position: relative;
      `
    )}
`;

const BagImage = styled.div`
  position: absolute;
  background-image: url('images/bag_home.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: calc(100% - 5em);
  top: 5em;
  opacity: 0.85;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        position: relative;
        top: -3em;
        height: calc(100%);
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
        position: relative;
        top: 0;
        left: 0;
        transform: none;
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
