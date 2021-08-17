import styled from 'styled-components';

const CatalogContainer = styled.div`
  padding: 50px;
`;

const CatalogsRow = styled.div`
  margin-top: 55px;
  display: flex;
`;

const CatalogTitle = styled.h2`
  max-width: 55%;
  font-weight: 900;
  font-size: 64px;
  color: #393939;
`;

const CatalogItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 225px;
`;

const CatalogItemImage = styled.img`
  margin-bottom: 20px;
`;

const CatalogItemTitle = styled.span`
  font-size: 24px;
`;

const CatalogItemButton = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  background-color: #fff;
  border: 3px solid #393939;
  box-sizing: border-box;
  border-radius: 2px;
  font-weight: 900;
  font-size: 18px;
  box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const CatalogItem = () => {
  return (
    <CatalogItemContainer>
      <CatalogItemImage src="images/ribbons_catalog.png" width="220px" />
      <CatalogItemTitle>Catalogo</CatalogItemTitle>
      <CatalogItemTitle>Cintas Impresas</CatalogItemTitle>
      <CatalogItemButton>DESCARGAR</CatalogItemButton>
    </CatalogItemContainer>
  );
};

const CatalogSection = () => {
  return (
    <CatalogContainer>
      <CatalogTitle>NUESTROS PRODUCTOS A TU DISPOSICIÓN </CatalogTitle>
      <CatalogsRow>
        <CatalogItem />
      </CatalogsRow>
    </CatalogContainer>
  );
};

export default CatalogSection;
