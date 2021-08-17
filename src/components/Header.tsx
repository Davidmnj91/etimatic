import styled from 'styled-components';
import Logo from './Logo';

const Header = () => {
  const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 0 50px;
    justify-content: space-between;
    width: 100%;
  `;

  const MenuLink = styled.a`
    //margin-right: 30px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    & + & {
      margin-left: 30px;
    }
  `;

  return (
    <Header>
      <Logo width="180px" height="80px" />
      <div>
        <MenuLink>PRODUCTOS</MenuLink>
        <MenuLink>QUIENES SOMOS </MenuLink>
        <MenuLink>CONTACTANOS</MenuLink>
      </div>
    </Header>
  );
};

export default Header;
