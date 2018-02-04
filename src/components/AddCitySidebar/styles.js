import styled from "styled-components";
import ButtonComponent from "../Button";

export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: -300px;
  bottom: 0;
  width: 300px;
  background-color: #fff;
  z-index: 1;
  border-left: var(--add-city-sidebar-border);
  display: flex;
  flex-direction: column;
  transition-property: right;
  transition-duration: 1s;

  ${props => props.isVisible && `
    right: 0;
  `}
`;

export const SidebarHeader = styled.header`
  display: flex;
  padding: 20px;
`;

export const SidebarCloseButton = styled(ButtonComponent).attrs({ type: "button" })`
  width: auto;
  margin-left: auto;
`;
