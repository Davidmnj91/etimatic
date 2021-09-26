import { useEmblaCarousel } from 'embla-carousel/react';
import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../hooks/useModal';
import { PrimaryButton } from './atoms/Button';
import ContactUsForm from './ContactUsForm';

const BoxContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 5em 5em;
  height: 70vh;
`;

const BoxContainerText = styled.div`
  font-weight: 600;
  font-size: 64px;
  color: ${props => props.theme.foreground};
  margin-bottom: 5rem;
`;

const Dots = styled.div`
  display: flex;
  position: absolute;
  bottom: 2em;
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = styled(PrimaryButton)<{ selected: boolean }>`
  padding: 0px;
  width: 16px;
  height: 16px;
  background-color: ${props => (props.selected ? `${props.theme.accent}` : `${props.theme.foreground}`)};
  border-radius: 50%;

  & + & {
    margin-left: 8px;
  }
`;

const boxCarouselItems = [
  { title: 'Packaging personalizado 100% a tus necesidades', boxImage: 'images/box_closed.png' },
  { title: 'La calidad de siempre', boxImage: 'images/box_opening.png' },
  { title: 'El mismo servicio', boxImage: 'images/box_open.png' },
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
          max-width: 100%;
          width: 100%;
          height: 100%;
        `}
      >
        <div
          css={css`
            display: flex;
            height: 100%;
          `}
        >
          {boxCarouselItems.map(({ title, boxImage }) => (
            <div
              key={title}
              css={css`
                position: relative;
                min-width: 100%;
                height: 100%;
              `}
            >
              <div
                css={css`
                  position: absolute;
                  width: 40%;
                  left: 20rem;
                  top: 50%;
                  transform: translateY(-50%);
                `}
              >
                <BoxContainerText>{title}</BoxContainerText>
                <PrimaryButton onClick={() => setShowModal(true)}>Quiero más información</PrimaryButton>
              </div>
              <div
                css={css`
                  width: 60%;
                  height: 100%;
                  position: absolute;
                  right: 0;
                  top: 0;
                  background-image: url(${boxImage});
                  background-size: contain;
                  background-position: left;
                  background-repeat: no-repeat;
                `}
              />
            </div>
          ))}
        </div>
      </div>
      <Dots>
        {scrollSnaps.map((_, index) => (
          <Dot key={index} selected={index === selectedIndex} onClick={() => scrollTo(index)} />
        ))}
      </Dots>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <ContactUsForm />
      </Modal>
    </BoxContainer>
  );
};

export default BoxSection;
