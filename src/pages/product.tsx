import styled from 'styled-components';
import CategoryLayout from '../components/CategoryLayout';
import ProductTile from '../components/ProductTile';

const Product = () => {
  const ListHeader = styled.div`
    border: 1px solid ${props => props.theme.palettes.FOREGROUND.main};
    border-left: none;
    border-right: none;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  `;

  const Grid = styled.div`
    height: calc(100% - 30px);
    display: grid;
    padding: 15px;
    grid-template-columns: 150px auto;
  `;

  const ProductList = styled.div`
    height: 100%;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 25px 10px;
  `;

  return (
    <CategoryLayout
      title="Bolsa Lujo"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    >
      <ListHeader>
        <div>Filtros</div>
        <div>1 - 12 de 18 productos &gt;</div>
        <div>Ordenar Por: Calidad ^</div>
      </ListHeader>
      <Grid>
        <div></div>
        <ProductList>
          {[...Array(20)].map((_, i) => (
            <ProductTile
              key={i}
              name={`Product ${i + 1}`}
              shortDescription={`This is Product ${i + 1}`}
              startingPrice={0.48}
              imageUrl={`https://picsum.photos/200?grayscale&random=${i + 1}`}
            />
          ))}
        </ProductList>
      </Grid>
    </CategoryLayout>
  );
};

export default Product;
