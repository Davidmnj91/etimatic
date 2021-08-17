import styled from 'styled-components';

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 70vh;
  position: relative;
`;

const BoxImage = styled.div`
  position: absolute;
  right: 30px;
  top: 60px;
  width: 480px;
  height: 580px;
  background-image: url('images/caja.png');
  background-size: contain;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  position: absolute;
  width: 35%;
  max-width: 35%;
  height: 174px;
  left: 115px;
  top: 25%;
  transform: translateY(-50%);
`;

const BoxContainerText = styled.div`
  font-weight: 600;
  font-size: 48px;
  color: #393939;
`;

const BoxContainerDescription = styled.div`
  margin-top: 25px;
  font-weight: 300;
  font-size: 24px;
  color: #393939;
`;

const BoxContainerSeparator = styled.div`
  position: relative;
  width: 20em;
  height: 1px;
  border-bottom: 5px solid #393939;
  margin-top: 70px;
  margin-left: 20%;
`;

const BoxSection = () => {
  return (
    <BoxContainer>
      <BoxImage />
      <TextContainer>
        <BoxContainerText>
          PACKAGING <b>100% PERSONALIZADO</b> A TUS NECESIDADES
        </BoxContainerText>
        <BoxContainerDescription>
          Atención personalizada nos avalan más de 30 años en el sector, ofreciendo así a nuestros clientes todas las
          necesidades posibles.
        </BoxContainerDescription>
        <BoxContainerSeparator />
      </TextContainer>
    </BoxContainer>
  );
};

export default BoxSection;
