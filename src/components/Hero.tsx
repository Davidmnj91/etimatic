import styled from 'styled-components';

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
  height: calc(80vh - 80px);
`;

const TextContainer = styled.div`
  position: absolute;
  background-image: url('images/home_titulo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  height: calc(80vh - 80px);
`;

const BagImage = styled.div`
  position: absolute;
  background-image: url('images/bag_home.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: calc(80vh - 80px);
  top: 5em;
`;

const CTA = styled.button`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);

  padding: 10px;
  background: #393939;
  border: 3px solid #393939;
  box-sizing: border-box;
  border-radius: 2px;

  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;

  cursor: pointer;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer />
      <BagImage />
      <CTA>NECESITO PACKAGING</CTA>
    </HeroContainer>
  );
};

export default Hero;
