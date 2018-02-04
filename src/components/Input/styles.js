import styled from "styled-components";

export const Input = styled.input.attrs({ type: "text" })`
  height: var(--input-height);
  width: var(--input-width);
  padding: var(--input-padding);
  font-size: var(--input-font-size);
  font-family: var(--input-font-family);
  border: var(--input-border);
`;
