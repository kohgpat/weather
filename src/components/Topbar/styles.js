import styled from "styled-components";
import ContainerComponent from "../Container";
import ButtonComponent from "../Button";

export const Topbar = styled.div`
  position: fixed;
  background-color: var(--topbar-background-color);
  width: var(--topbar-width);
  height: var(--topbar-height);
  flex-shrink: 0;
  padding: 10px 20px;
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

  ${props => props.isActive && `
    background-color: #333;
    color: #fff;
  `}
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
