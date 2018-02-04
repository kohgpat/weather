import styled from "styled-components";

export const Topbar = styled.div`
  background-color: var(--topbar-background-color);
  width: var(--topbar-width);
  height: var(--topbar-height);
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;

export const Name = styled.h1`
  font-family: var(--topbar-name-font-family);
  margin: 0 auto;
`;
