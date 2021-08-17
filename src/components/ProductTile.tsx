import styled from 'styled-components';

type Props = {
  name: string;
  startingPrice: number;
  shortDescription: string;
  imageUrl: string;
  isFavorite?: boolean;
};

const ProductTile = ({ name, startingPrice, shortDescription, imageUrl, isFavorite }: Props) => {
  const Card = styled.div`
    width: 200px;
  `;

  const CardThumbnail = styled.div`
    position: relative;
  `;

  const FavoriteButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    position: absolute;
    bottom: 5px;
    right: 5px;
  `;

  const CardTitle = styled.div`
    font-size: 12pt;
    font-weight: bolder;
  `;

  const CardDescription = styled.div`
    text-align: center;
  `;

  const ShopButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    color: ${props => props.theme.foreground};
    outline: none;
    border-color: ${props => props.theme.foreground};
    padding: 5px 15px;
    margin-top: 5px;
  `;

  return (
    <Card>
      <CardThumbnail>
        <img src={imageUrl} alt={name} />
        <FavoriteButton>
          <i>{isFavorite ? 'love-on' : 'love-off'}</i>
        </FavoriteButton>
      </CardThumbnail>
      <CardTitle>{name}</CardTitle>
      <CardDescription>
        <div>
          Desde <b>{startingPrice}€</b>
        </div>
        <div>{shortDescription}</div>
        <ShopButton>COMPRAR</ShopButton>
      </CardDescription>
    </Card>
  );
};

export default ProductTile;
