import styled from "styled-components";
import ContainerComponent from "../Container";
import ButtonComponent from "../Button";

export const Topbar = styled.div`
  background-color: var(--topbar-background-color);
  width: var(--topbar-width);
  height: var(--topbar-height);
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;

export const Container = styled(ContainerComponent)`
  position: relative;
`;

export const Name = styled.h1`
  font-family: var(--topbar-name-font-family);
  margin: 0 auto;
`;

export const AddCityModalToggle = styled(ButtonComponent)`
  width: auto;
  position: absolute;
  right: 0;
`;
