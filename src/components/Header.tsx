import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../hooks/useModal';
import ContactUsForm from './ContactUsForm';
import Logo from './Logo';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 0 3em;
  justify-content: space-between;
  width: 100%;
`;

const MenuLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.theme.foreground};

  & + & {
    margin-left: 30px;
  }
`;

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <HeaderContainer>
      <Logo width="180px" height="80px" />
      <div>
        <MenuLink href="#products">PRODUCTOS</MenuLink>
        <MenuLink href="#aboutus">QUIENES SOMOS </MenuLink>
        <MenuLink onClick={() => setShowModal(true)}>CONTACTANOS</MenuLink>
      </div>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <ContactUsForm />
      </Modal>
    </HeaderContainer>
  );
};

export default Header;
