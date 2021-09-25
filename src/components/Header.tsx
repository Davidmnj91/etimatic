import styled from 'styled-components';
import Logo from './Logo';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 0 3em;
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

const Header = () => {
  return (
    <HeaderContainer>
      <Logo width="180px" height="80px" />
      <div>
        <MenuLink>PRODUCTOS</MenuLink>
        <MenuLink>QUIENES SOMOS </MenuLink>
        <MenuLink>CONTACTANOS</MenuLink>
      </div>
    </HeaderContainer>
  );
};

export default Header;
