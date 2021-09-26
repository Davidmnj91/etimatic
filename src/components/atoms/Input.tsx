import styled from 'styled-components';

export const Input = styled.input`
  height: 3em;
  padding: 1em;
  font-size: 16px;
  border: 2px solid ${props => props.theme.foreground};

  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: ${props => props.theme.accent};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  min-height: 10em;
  max-width: 100%;
  padding: 1em;
  font-size: 16px;
  border: 2px solid ${props => props.theme.foreground};

  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: ${props => props.theme.accent};
    outline: none;
  }
`;
