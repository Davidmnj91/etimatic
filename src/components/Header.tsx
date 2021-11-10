import { useState } from 'react';
import styled, { css } from 'styled-components';
import ContactUsForm from './ContactUsForm';
import Modal from './Modal';
import CloseIcon from './svgs/CloseIcon';
import Logo from './svgs/Logo';
import MenuIcon from './svgs/MenuIcon';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;

  display: flex;
  align-items: center;
  padding: 0 3em;
  justify-content: space-between;

  background: ${props => props.theme.palettes.WHITE};

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        justify-content: center;
        padding: 0 16px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      `
    )}
`;

const Menu = styled.div`
  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        display: none;
      `
    )}
`;

const MobileMenu = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  outline: none;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        display: block;
        position: absolute;
        right: 16px;
      `
    )}
`;

const MobileMenuContainer = styled.div<{ show: boolean }>`
  background-color: ${props => props.theme.palettes.WHITE};
  overflow-y: hidden;
  position: absolute;
  top: 60px;
  left: 0;
  bottom: 0;
  right: 0;
  height: ${props => (props.show ? '100vh' : '0px')};
  transition: height 0.3s ease-in-out;
  z-index: 2;
`;

const MobileMenuWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const MobileMenuLink = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  text-align: start;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: ${props => props.theme.palettes.MAIN};
`;

const MobileMenuSeparator = styled.hr`
  margin: 8px 0;
`;

const MenuLink = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.theme.palettes.MAIN};

  & + & {
    margin-left: 30px;
  }
`;

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (section: string) => {
    setTimeout(() => {
      setShowMobileMenu(false);
    }, 0);
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeaderContainer>
      <Logo width="180px" height="60px" />
      <Menu>
        <MenuLink onClick={() => scrollToSection('#products')}>PRODUCTOS</MenuLink>
        <MenuLink onClick={() => scrollToSection('#about_us')}>QUIENES SOMOS </MenuLink>
        <MenuLink onClick={() => setShowModal(true)}>CONTACTANOS</MenuLink>
      </Menu>
      <MobileMenu onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? (
          <CloseIcon width="24px" height="21px" fill="#393939" />
        ) : (
          <MenuIcon width="24px" height="21px" fill="#393939" />
        )}
      </MobileMenu>
      <MobileMenuContainer show={showMobileMenu}>
        <MobileMenuWrapper>
          <MobileMenuLink onClick={() => scrollToSection('#products')}>PRODUCTOS</MobileMenuLink>
          <MobileMenuSeparator />
          <MobileMenuLink onClick={() => scrollToSection('#about_us')}>QUIENES SOMOS </MobileMenuLink>
          <MobileMenuSeparator />
          <MobileMenuLink onClick={() => setShowModal(true)}>CONTACTANOS</MobileMenuLink>
        </MobileMenuWrapper>
      </MobileMenuContainer>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <ContactUsForm />
      </Modal>
    </HeaderContainer>
  );
};

export default Header;
