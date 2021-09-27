import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { css, keyframes } from 'styled-components';

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
            <svg
              css={css`
                fill: ${props => props.theme.foreground};
              `}
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path d="M17 0.499999C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.499999 26.1127 0.499999 17C0.5 7.8873 7.8873 0.499999 17 0.499999ZM30.5 17C30.5 9.54415 24.4558 3.5 17 3.5C9.54415 3.5 3.5 9.54415 3.5 17C3.5 24.4558 9.54415 30.5 17 30.5C24.4558 30.5 30.5 24.4558 30.5 17ZM22.3033 11.6967C22.8891 12.2825 22.8891 13.2323 22.3033 13.8181L19.1214 17L22.3033 20.182C22.8891 20.7678 22.8891 21.7175 22.3033 22.3033C21.7175 22.8891 20.7678 22.8891 20.182 22.3033L17 19.1214L13.8181 22.3033C13.2323 22.8891 12.2825 22.8891 11.6967 22.3033C11.111 21.7175 11.111 20.7678 11.6967 20.182L14.8787 17L11.6967 13.8181C11.111 13.2323 11.111 12.2825 11.6967 11.6967C12.2825 11.111 13.2323 11.111 13.8181 11.6967L17 14.8787L20.182 11.6967C20.7678 11.111 21.7175 11.111 22.3033 11.6967Z" />
            </svg>
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

const fadeInAnimation = keyframes`
  0% {
    animation-timing-function: cubic-bezier(0.2242, 0.7499, 0.3142, 0.8148);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledModalBody = styled.div``;

const StyledModalHeader = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
`;

const StyledModal = styled.div`
  position: relative;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeInAnimation} 0.3s;
`;

export default Modal;
