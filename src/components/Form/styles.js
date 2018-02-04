import React from "react";
import styled from "styled-components";
import ButtonComponent from "../Button";
import InputComponent from "../Input";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: 50px;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
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
  display: flex;
  margin-bottom: 5px;
`;

export const HelpText = styled.span`
  color: #7F7F7F;
  margin-left: auto;
`;

export const Input = styled(InputComponent).attrs({ type: "text" })``;

export const SubmitButton = styled((props) => <ButtonComponent {...props} />).attrs({ type: "submit" })``;
