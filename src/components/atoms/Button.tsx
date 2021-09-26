import styled from 'styled-components';

export const PrimaryButton = styled.button`
  background: ${props => props.theme.accent};
  border-radius: 4px;
  padding: 16px 48px;
  box-shadow: none;

  color: ${props => props.theme.foreground};
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  outline: none;
  border: none;
  cursor: pointer;

  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: ${props => props.theme.foreground};
    color: ${props => props.theme.background};
  }
`;
