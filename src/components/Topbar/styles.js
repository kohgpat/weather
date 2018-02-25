import styled from "styled-components";
import ContainerComponent from "../Container";
import ButtonComponent from "../Button";

export const Topbar = styled.div`
  position: fixed;
  background-color: var(--topbar-background-color);
  width: var(--topbar-width);
  height: var(--topbar-height);
  flex-shrink: 0;
  padding: 0 20px;
  box-shadow: 0 4px 2px -2px rgba(0,0,0,0.1);

  ${props =>
    props.isMobile &&
    props.addCitySidebar &&
    props.addCitySidebar.isVisible &&
    `
    display: none;
  `};
`;

export const Container = styled(ContainerComponent)`
  position: relative;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
  height: 100%;
`;

export const Settings = styled.div`
  position: absolute;
  left: 0;
`;

export const SettingsControl = styled(ButtonComponent).attrs({
  type: "button"
})`
  width: auto;
  margin: 0;
  background-color: var(--topbar-settings-control-background-color);
  color: var(--topbar-settings-control-color);

  ${props =>
    props.isActive &&
    `
    background-color: var(--topbar-settings-control-background-color-active);
    color: var(--topbar-settings-control-color-active);
  `};
`;

export const Name = styled.h1`
  font-family: var(--topbar-name-font-family);
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const AddCitySidebarToggle = styled(ButtonComponent).attrs({
  type: "button"
})`
  width: auto;
  position: absolute;
  right: 0;
`;
