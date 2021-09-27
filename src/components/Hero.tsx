import { useState } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from './atoms/Button';
import ContactUsForm from './ContactUsForm';
import Modal from './Modal';

const HeroContainer = styled.div`
  position: relative;
  height: calc(100vh - 80px - 5em);
  margin: 5em 5em 0;
`;

const TextContainer = styled.div`
  position: absolute;
  background-image: url('images/home_titulo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  height: 100%;
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
`;

const CTA = styled(PrimaryButton)`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
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
