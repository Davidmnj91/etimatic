import styled from 'styled-components';
import { PrimaryButton } from './atoms/Button';

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 5em 5em;
  height: 70vh;
  position: relative;
`;

const BoxImage = styled.div`
  position: absolute;
  right: 10em;
  width: 40%;
  height: 100%;
  background-image: url('images/caja.png');
  background-size: contain;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  position: absolute;
  width: 35%;
  height: 100%;
  left: 5em;
`;

const BoxContainerText = styled.div`
  font-weight: 600;
  font-size: 64px;
  color: ${props => props.theme.foreground};
`;

const BoxContainerDescription = styled.div`
  width: 80%;
  margin-top: 2em;
  font-weight: 300;
  font-size: 24px;
  color: ${props => props.theme.foreground};
`;

const BoxContainerSeparator = styled.div`
  width: 29em;
  height: 1px;
  margin-top: 5em;
  right: -15em;
  position: absolute;
  border-bottom: 5px solid ${props => props.theme.foreground};
`;

const MoreInfoButton = styled(PrimaryButton)`
  position: absolute;
  bottom: 15em;
`;

const Dots = styled.div`
  display: flex;
  position: absolute;
  bottom: 2em;
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = styled(PrimaryButton)`
  padding: 0px;
  width: 16px;
  height: 16px;
  background-color: #00ffa3;
  border-radius: 50%;

  & + & {
    margin-left: 8px;
  }
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
        <MoreInfoButton>Quiero más información</MoreInfoButton>
      </TextContainer>
      <Dots>
        <Dot />
        <Dot />
        <Dot />
      </Dots>
    </BoxContainer>
  );
};

export default BoxSection;
