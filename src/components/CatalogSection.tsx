import styled from 'styled-components';
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
  color: ${props => props.theme.foreground};
`;

const CatalogCategories = styled.div`
  display: flex;
  justify-content: center;
`;

const Category = styled(PrimaryButton)`
  position: relative;
  border-radius: 4px;
  padding: 5px 20px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out border-color 0.3s ease-in-out;

  & ~ & {
    margin-left: 16px;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-width: 10px 8px 0 8px;
    border-color: ${props => props.theme.accent} transparent transparent transparent;

    transition: border-color 0.3s ease-in-out;
  }

  &:hover {
    &:after {
      border-color: ${props => props.theme.foreground} transparent transparent transparent;
    }
  }
`;

const CatalogItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
`;

const CatalogItemImage = styled.img`
  margin-bottom: 20px;
`;

const CatalogItemButton = styled(PrimaryButton)`
  margin-top: 20px;
  width: 100%;
`;

const CatalogItem = () => {
  return (
    <CatalogItemContainer>
      <CatalogItemImage src="images/catalog_bag.png" width="400px" />
      <CatalogItemButton>Ver Catálogo</CatalogItemButton>
    </CatalogItemContainer>
  );
};

const CatalogSection = () => {
  return (
    <CatalogContainer>
      <CatalogTitle>NUESTRO PRODUCTO</CatalogTitle>
      <CatalogCategories>
        <Category>Bolsas algodón</Category>
        <Category>Bolsas papel</Category>
        <Category>Sector alimentario</Category>
        <Category>Decoración</Category>
        <Category>Cintas Impresas</Category>
        <Category>Embalaje decorado </Category>
        <Category>Etiquetas adhesivas </Category>
        <Category>Take Away </Category>
        <Category>Tendencias etimatic </Category>
      </CatalogCategories>
      <CatalogsRow>
        <CatalogItem />
      </CatalogsRow>
    </CatalogContainer>
  );
};

export default CatalogSection;
