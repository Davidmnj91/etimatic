import { useEmblaCarousel } from 'embla-carousel/react';
import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useBreakpoint } from '../providers/breakpoint';
import { PrimaryButton } from './atoms/Button';
import { Flex } from './atoms/Container';
import { Text } from './atoms/Text';

const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5em 5em;
  width: 100%;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        padding: 0 1em 3em;
      `
    )}
`;

const CatalogsRow = styled.div`
  margin-top: 55px;
  display: flex;
`;

const CatalogCategories = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`;

const Category = styled(PrimaryButton)<{ selected: boolean }>`
  position: relative;
  border-radius: 4px;
  padding: 5px 20px;
  background-color: ${props => (props.selected ? `${props.theme.palettes.ACCENT}` : `${props.theme.palettes.MAIN}`)};
  border-color: ${props => (props.selected ? `${props.theme.palettes.ACCENT}` : `${props.theme.palettes.MAIN}`)};
  color: ${props => (props.selected ? `${props.theme.palettes.MAIN}` : `${props.theme.palettes.WHITE}`)};

  transition: background 0.3s ease-in-out, color 0.3s ease-in-out border-color 0.3s ease-in-out;

  & ~ & {
    margin-left: 16px;
  }

  &:hover {
    background-color: ${props => props.theme.palettes.ACCENT};
    border-color: ${props => props.theme.palettes.ACCENT};
    color: ${props => props.theme.palettes.MAIN};
  }

  ${props =>
    props.selected &&
    css`
      &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        border-style: solid;
        border-width: 10px 8px 0 8px;
        border-color: ${props => props.theme.palettes.ACCENT} transparent transparent transparent;

        transition: border-color 0.3s ease-in-out;
      }

      &:hover {
        background-color: ${props => props.theme.palettes.ACCENT};
        color: ${props => props.theme.palettes.MAIN};
      }
    `}
`;

const CatalogItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 100%;
`;

const CatalogItemImage = styled.div<{ imageSrc: string }>`
  width: 100%;
  height: 300px;
  background-image: ${({ imageSrc }) => `url(${imageSrc})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 20px;
`;

const CatalogItemButton = styled(PrimaryButton)`
  text-decoration: none;
  margin-top: 20px;
  max-width: 400px;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        width: 90%;
      `
    )}
`;

const Divider = styled.div`
  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        border: 1px solid ${props => props.theme.palettes.MAIN};
        width: 100%;
        height: 1px;
        margin: 0 16px 3em;
      `
    )}
`;

const Categories = [
  'Bolsas Algodón y TNT',
  'Bolsas Papel',
  'Sector Alimentario',
  'Decoración',
  'Cintas Decorativas e Impresas',
  'Embalaje Decorado',
  'Etiquetas Adhesivas',
  'Take Away',
  'Tendencias Etimatic',
  // 'Papel Regalo',
];

const CatalogItems = [
  { image: 'images/catalog_bag_cotton.png', catalog: './catalogs/catalog_bag_cotton.pdf' },
  { image: 'images/catalog_bag_paper.png', catalog: './catalogs/catalog_bag_paper.pdf' },
  { image: 'images/catalog_food.png', catalog: './catalogs/catalog_food.pdf' },
  { image: 'images/catalog_decoration.png', catalog: './catalogs/catalog_decoration.pdf' },
  { image: 'images/catalog_cintas.png', catalog: './catalogs/catalog_cintas.pdf' },
  { image: 'images/catalog_boxes.png', catalog: './catalogs/catalog_boxes.pdf' },
  { image: 'images/catalog_stickers.png', catalog: './catalogs/catalog_stickers.pdf' },
  { image: 'images/catalog_takeaway.png', catalog: './catalogs/catalog_takeaway.pdf' },
  { image: 'images/catalog_trends.png', catalog: './catalogs/catalog_trends.pdf' },
];

const CatalogSection = () => {
  const { isBreakpoint } = useBreakpoint();
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    index => {
      if (index < 0 || index >= CatalogItems.length) {
        return;
      }
      setSelectedIndex(index);
      embla && embla.scrollTo(index);
    },
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  return (
    <CatalogContainer>
      <Divider />
      <Text
        font="HEADING1"
        css={css`
          text-align: center;
        `}
      >
        NUESTRO PRODUCTO
      </Text>
      <CatalogCategories>
        {isBreakpoint('FULL') ? (
          Categories.map((c, index) => (
            <Category key={c} selected={selectedIndex === index} onClick={() => scrollTo(index)}>
              {c}
            </Category>
          ))
        ) : (
          <Flex flex="1 0 100%" justifyContent="space-between">
            <button
              onClick={() => scrollTo(selectedIndex - 1)}
              css={css`
                background: transparent;
                border: none;
                outline: none;
              `}
            >
              <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.748847 11.7109C0.340014 11.3175 0.340014 10.6632 0.748847 10.2698L10.4981 0.888568C11.2555 0.159721 12.4804 0.94322 12.1364 1.93647L9.11339 10.663C9.03994 10.875 9.03994 11.1056 9.11339 11.3177L12.1364 20.0442C12.4804 21.0375 11.2555 21.8209 10.4981 21.0921L0.748847 11.7109Z"
                  fill="#393939"
                />
              </svg>
            </button>

            <Category selected={true}>{Categories[selectedIndex]}</Category>

            <button
              onClick={() => scrollTo(selectedIndex + 1)}
              css={css`
                background: transparent;
                border: none;
                outline: none;
              `}
            >
              <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.7512 10.2698C12.16 10.6632 12.16 11.3176 11.7512 11.711L2.00194 21.0921C1.2445 21.821 0.019577 21.0375 0.363649 20.0442L3.38661 11.3177C3.46006 11.1057 3.46006 10.8751 3.38661 10.6631L0.363649 1.93651C0.0195769 0.943264 1.2445 0.159768 2.00194 0.888615L11.7512 10.2698Z"
                  fill="#393939"
                />
              </svg>
            </button>
          </Flex>
        )}
      </CatalogCategories>
      <div
        ref={viewportRef}
        css={css`
          overflow: hidden;
          width: 100%;
        `}
      >
        <CatalogsRow>
          {CatalogItems.map(({ image, catalog }) => (
            <CatalogItemContainer key={catalog}>
              <CatalogItemImage imageSrc={image} />
              <CatalogItemButton as="a" href={catalog} target="_blank">
                Ver Catálogo
              </CatalogItemButton>
            </CatalogItemContainer>
          ))}
        </CatalogsRow>
      </div>
    </CatalogContainer>
  );
};

export default CatalogSection;
