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

export const Settings = styled.div`
  position: absolute;
  left: 0;
`;

export const SettingsControl = styled(ButtonComponent).attrs({
  type: "button"
})`
  width: auto;

  ${props => props.isActive && `
    background-color: #333;
    color: #fff;
  `}
`;

export const Name = styled.h1`
  font-family: var(--topbar-name-font-family);
  margin: 0 auto;
`;

export const AddCitySidebarToggle = styled(ButtonComponent).attrs({
  type: "button"
})`
  width: auto;
  position: absolute;
  right: 0;
`;
