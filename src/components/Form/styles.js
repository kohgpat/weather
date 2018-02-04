import styled from "styled-components";
import ButtonComponent from "../Button";
import InputComponent from "../Input";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: 50px;
  width: 300px;
`;

export const Name = styled.h4`
  margin: 0;
`;

export const Block = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled(InputComponent).attrs({ type: "text" })``;

export const SubmitButton = styled(ButtonComponent).attrs({ type: "submit" })``;
