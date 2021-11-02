import { useEmblaCarousel } from 'embla-carousel/react';
import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { PrimaryButton } from './atoms/Button';

const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5em 5em;
  width: 100%;
`;

const CatalogsRow = styled.div`
  margin-top: 55px;
  display: flex;
`;

const CatalogTitle = styled.h2`
  font-weight: 900;
  font-size: 64px;
  color: ${props => props.theme.palettes.MAIN};
`;

const CatalogCategories = styled.div`
  display: flex;
  justify-content: center;
`;

const Category = styled(PrimaryButton)<{ selected: boolean }>`
  position: relative;
  border-radius: 4px;
  padding: 5px 20px;
  background-color: ${props => (props.selected ? `${props.theme.palettes.ACCENT}` : `${props.theme.palettes.MAIN}`)};
  color: ${props => (props.selected ? `${props.theme.palettes.MAIN}` : `${props.theme.palettes.WHITE}`)};

  transition: background 0.3s ease-in-out, color 0.3s ease-in-out border-color 0.3s ease-in-out;

  & ~ & {
    margin-left: 16px;
  }

  &:hover {
    background-color: ${props => props.theme.palettes.ACCENT};
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
  min-width: 100%;
`;

const CatalogItemImage = styled.img`
  margin-bottom: 20px;
`;

const CatalogItemButton = styled(PrimaryButton)`
  text-decoration: none;
  margin-top: 20px;
  width: 400px;
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
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    index => {
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
      <CatalogTitle>NUESTRO PRODUCTO</CatalogTitle>

      <CatalogCategories>
        {Categories.map((c, index) => (
          <Category key={index} selected={selectedIndex === index} onClick={() => scrollTo(index)}>
            {c}
          </Category>
        ))}
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
            <CatalogItemContainer key={0}>
              <CatalogItemImage src={image} width="400px" />
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
