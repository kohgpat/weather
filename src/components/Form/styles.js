import React from "react";
import styled from "styled-components";
import ButtonComponent from "../Button";
import InputComponent from "../Input";

export const Form = styled.form.attrs({ autoComplete: "off" })`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-self: stretch;
  padding: 20px;
  margin: 10px 20px 20px;
  background-color: #fff;
  border-radius: 4px;

  ${props =>
    props.inSidebar &&
    `
    margin-top: 0;
    width: 100%;
  `};

  @media (min-width: 768px) {
    align-self: center;
    width: 320px;
  }
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
  color: #7f7f7f;
  margin-left: auto;
`;

export const Input = styled(InputComponent).attrs({ type: "text" })`
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const SubmitButton = styled(props => (
  <ButtonComponent {...props} />
)).attrs({ type: "submit" })``;
