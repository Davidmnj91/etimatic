import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { PrimaryButton } from './atoms/Button';
import ContactUsForm from './ContactUsForm';
import Modal from './Modal';

const HeroContainer = styled.div`
  position: relative;
  height: calc(100vh - 60px);
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
  top: 3em;
  left: 0;
  background-image: url('images/home_titulo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;

  width: 100%;
  height: 100%;
`;

const BagImage = styled.div<{ bagHeight: number }>`
  position: absolute;
  background-image: url('images/bag_home.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  opacity: 0.85;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        left: 50%;
        transform: translateX(-50%);
        width: 150%;
        height: calc(100% - ${props.bagHeight}%);
        background-size: cover;
        background-position-y: unset;
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
        top: unset;
        bottom: 10%;
        width: 240px;
      `
    )}
`;

const textRatio = 0.44;

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const result = (window.innerWidth * (textRatio * 10)) / 100;
    setHeight(result);
  });

  return (
    <HeroContainer>
      <TextContainer />
      <BagImage bagHeight={height} />
      <CTA onClick={() => setShowModal(true)}>Necesito Packaging</CTA>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <ContactUsForm />
      </Modal>
    </HeroContainer>
  );
};

export default Hero;
