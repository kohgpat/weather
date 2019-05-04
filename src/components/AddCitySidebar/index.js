import React from "react";
import { Portal } from "react-portal";
import FormContainer from "../../containers/Form";
import * as s from "./styles";

const AddCitySidebar = ({ isMobile, addCitySidebar, toggleAddCitySidebar }) => (
  <s.SidebarWrapper isMobile={isMobile} addCitySidebar={addCitySidebar}>
    {addCitySidebar.isVisible && (
      <Portal>
        <s.SidebarTrigger onClick={toggleAddCitySidebar} />
      </Portal>
    )}

    <s.Sidebar isVisible={addCitySidebar.isVisible}>
      <s.SidebarHeader>
        <s.SidebarCloseButton onClick={toggleAddCitySidebar}>
          &times;
        </s.SidebarCloseButton>
      </s.SidebarHeader>

      <FormContainer inSidebar toggleAddCitySidebar={toggleAddCitySidebar} />
    </s.Sidebar>
  </s.SidebarWrapper>
);

export default AddCitySidebar;
