import styled from "styled-components";

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

export const Input = styled.input.attrs({ type: "text" })`
  height: 40px;
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  height: 40px;
  border: 0;
  background-color: #eee;
  width: 100%;
`;