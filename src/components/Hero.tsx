import styled from 'styled-components';
import { PrimaryButton } from './atoms/Button';

const findScrollableParent = node => {
  if (node == null) {
    return null;
  }

  if (node.scrollHeight > node.clientHeight) {
    return node;
  } else {
    return findScrollableParent(node.parentNode);
  }
};

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
  return (
    <HeroContainer>
      <TextContainer />
      <BagImage />
      <CTA>Necesito Packaging</CTA>
    </HeroContainer>
  );
};

export default Hero;
