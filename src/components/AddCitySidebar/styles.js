import styled from "styled-components";
import ButtonComponent from "../Button";

export const SidebarWrapper = styled.div`
  z-index: 1;

  ${props =>
    props.isMobile &&
    props.addCitySidebar &&
    props.addCitySidebar.isVisible &&
    `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;;
  `};
`;

export const SidebarTrigger = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: none;
  background-color: #fff;
  border-left: var(--add-city-sidebar-border);
  flex-direction: column;
  transition-property: right;
  transition-duration: 1s;

  ${props =>
    props.isVisible &&
    `
    display: flex;
  `};

  @media (min-width: 768px) {
    display: flex;
    max-width: 320px;
    right: -320px;

    ${props =>
      props.isVisible &&
      `
      right: 0;
    `};
  }
`;

export const SidebarHeader = styled.header`
  display: flex;
  flex-shrink: 0;
  padding: 10px 20px;
`;

export const SidebarCloseButton = styled(ButtonComponent).attrs({
  type: "button"
})`
  width: auto;
  margin-left: auto;
`;
