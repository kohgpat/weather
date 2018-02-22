import styled from "styled-components";
import ButtonComponent from "../Button";

export const SidebarWrapper = styled.div`
  z-index: 1;
`;

export const SidebarTrigger = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: -320px;
  bottom: 0;
  width: 320px;
  background-color: #fff;
  z-index: 2;
  border-left: var(--add-city-sidebar-border);
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition-property: right;
  transition-duration: 1s;

  ${props =>
    props.isVisible &&
    `
    right: 0;
  `};
`;

export const SidebarHeader = styled.header`
  display: flex;
  flex-shrink: 0;
  padding: 20px;
`;

export const SidebarCloseButton = styled(ButtonComponent).attrs({
  type: "button"
})`
  width: auto;
  margin-left: auto;
`;
