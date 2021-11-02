import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { FadeInAnimation } from './atoms/animations';
import CloseIcon from './svgs/CloseIcon';

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ show, onClose, children }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = e => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            <CloseButton width="34px" height="34px" fill="#00FFA3" />
          </a>
        </StyledModalHeader>
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  max-height: 100%;
  max-width: 100%;
  overflow: auto;
`;

const StyledModalHeader = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        top: 12px;
        right: 12px;
      `
    )}
`;

const StyledModal = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

const StyledModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${FadeInAnimation} 0.3s;
  z-index: 5;
`;

const CloseButton = styled(CloseIcon)`
  fill: ${props => props.theme.palettes.MAIN};

  ${props =>
    props.theme.mediaquery(
      'SLIM',
      css`
        fill: ${props => props.theme.palettes.MAIN};
      `
    )}
`;

export default Modal;
