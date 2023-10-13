import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
const SidebarNav = () => {
  return (
    <div>
      <Sidebar>
        <Menu>
          <MenuItem>
            <Link to="/admin">Dasboard</Link>
          </MenuItem>
          <SubMenu label="User">
            <MenuItem>
              <Link to="/admin/manageUser">Maneger User</Link>
            </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarNav;
