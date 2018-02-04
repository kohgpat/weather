import React from "react";
import FormContainer from "../../containers/Form";
import * as styles from "./styles";

const AddCitySidebar = ({ addCitySidebar, toggleAddCitySidebar }) => (
  <styles.Sidebar isVisible={addCitySidebar.isVisible}>
    <styles.SidebarHeader>
      <styles.SidebarCloseButton onClick={toggleAddCitySidebar}>
        &times;
      </styles.SidebarCloseButton>
    </styles.SidebarHeader>

    <FormContainer inSidebar />
  </styles.Sidebar>
);

export default AddCitySidebar;
