import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledField = styled(Field)`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const StyledButton = styled.button`
  width: 100px;
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;
