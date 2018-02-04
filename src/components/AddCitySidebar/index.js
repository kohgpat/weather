import React from "react";
import { Portal } from "react-portal";
import FormContainer from "../../containers/Form";
import * as styles from "./styles";

const AddCitySidebar = ({ addCitySidebar, toggleAddCitySidebar }) => (
  <styles.SidebarWrapper>
    {
      addCitySidebar.isVisible && (
        <Portal>
          <styles.SidebarTrigger onClick={toggleAddCitySidebar} />
        </Portal>
      )
    }

    <styles.Sidebar isVisible={addCitySidebar.isVisible}>
      <styles.SidebarHeader>
        <styles.SidebarCloseButton onClick={toggleAddCitySidebar}>
          &times;
        </styles.SidebarCloseButton>
      </styles.SidebarHeader>

      <FormContainer inSidebar />
    </styles.Sidebar>
  </styles.SidebarWrapper>
);

export default AddCitySidebar;
