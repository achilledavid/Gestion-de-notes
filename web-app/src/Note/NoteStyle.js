import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  flex: 1;
`;

export const Title = styled.input`
  font-size: 1.3rem;
  border: none;
  outline: none;
  border-bottom: 1px solid ${(props) => props.theme.main};
  background: transparent;
`;

export const Textarea = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  flex: 1;
  background: transparent;
`;
