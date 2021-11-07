import { useEmblaCarousel } from 'embla-carousel/react';
import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { PrimaryButton } from './atoms/Button';
import { Flex } from './atoms/Container';
import ContactUsForm from './ContactUsForm';
import Modal from './Modal';

const BoxContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0 5em 5em;
  height: 75vh;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        padding: 0em;
        margin: 0 0 3em;
      `
    )}
`;

const BoxItem = styled.div`
  position: relative;
  min-width: 100%;
  height: 100%;
`;

const BoxItemText = styled.div`
  font-size: ${props => props.theme.breakPoints.FULL.fonts.HEADING1.size}px;
  line-height: ${props => props.theme.breakPoints.FULL.fonts.HEADING1.lineHeight}px;
  color: ${props => props.theme.palettes.MAIN};

  position: absolute;
  width: 60%;
  top: 120px;

  b {
    font-weight: bolder;
  }

  small {
    display: flex;
    ${props => props.theme.text('TITLE')};
    line-height: ${props => props.theme.breakPoints.FULL.fonts.TITLE.lineHeight}px;
  }

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        font-size: ${props => props.theme.breakPoints.SLIM.fonts.HEADING1.size}px;
        line-height: ${props => props.theme.breakPoints.SLIM.fonts.HEADING1.lineHeight}px;
        width: 100%;
        top: 30px;
        text-align: center;
      `
    )}
`;

const BoxItemButton = styled(PrimaryButton)`
  position: absolute;
  max-width: 360px;
  min-width: 30%;
  bottom: 160px;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        width: 90%;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
      `
    )}
`;

const BoxItemImage = styled.div<{ imageSrc: string }>`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-image: ${({ imageSrc }) => `url(${imageSrc})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        background-size: contain;
        width: 100%;
        left: 0;
      `
    )}
`;

const Dots = styled.div`
  display: flex;
  position: absolute;
  bottom: 2em;
  left: 50%;
  transform: translateX(-50%);

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        bottom: 7em;
      `
    )}
`;

const Dot = styled(PrimaryButton)<{ selected: boolean }>`
  padding: 0px;
  width: 16px;
  height: 16px;
  background-color: ${props => (props.selected ? `${props.theme.palettes.ACCENT}` : `${props.theme.palettes.MAIN}`)};
  border-radius: 50%;

  & + & {
    margin-left: 16px;
  }

  &:hover {
    background-color: ${props => (props.selected ? `${props.theme.palettes.ACCENT}` : `${props.theme.palettes.MAIN}`)};
  }
`;

const boxCarouselItems = [
  { title: 'PACKAGING <b>100% PERSONALIZADO</b> A TUS NECESIDADES', boxImage: 'images/box_closed.png' },
  { title: 'LA <b>CALIDAD DE SIEMPRE</b>', boxImage: 'images/box_opening.png' },
  {
    title:
      'EL <b>MISMO SERVICIO</b> <small>Atención personalizada nos avalan más de 30 años en el sector, ofreciendo así a nuestros clientes todas las necesidades posibles.</small>',
    boxImage: 'images/box_open.png',
  },
];

const BoxSection = () => {
  const [showModal, setShowModal] = useState(false);

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(index => embla && embla.scrollTo(index), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  return (
    <BoxContainer>
      <div
        ref={viewportRef}
        css={css`
          overflow: hidden;
          width: 100%;
          height: 100%;
        `}
      >
        <Flex
          css={css`
            height: 100%;
          `}
        >
          {boxCarouselItems.map(({ title, boxImage }) => (
            <BoxItem key={title}>
              <BoxItemText dangerouslySetInnerHTML={{ __html: title }} />
              <BoxItemImage imageSrc={boxImage} />
            </BoxItem>
          ))}
        </Flex>
        <BoxItemButton onClick={() => setShowModal(true)}>Quiero más información</BoxItemButton>
      </div>
      <Dots>
        {scrollSnaps.map((_, index) => (
          <Dot color="MAIN" key={index} selected={index === selectedIndex} onClick={() => scrollTo(index)} />
        ))}
      </Dots>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <ContactUsForm />
      </Modal>
    </BoxContainer>
  );
};

export default BoxSection;
