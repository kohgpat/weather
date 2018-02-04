import styled from "styled-components";
import ButtonComponent from "../Button";

export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: #fff;
  display: none;
  z-index: 1;
  border-left: var(--add-city-sidebar-border);

  ${props => props.isVisible && `
    display: flex;
    flex-direction: column;
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
