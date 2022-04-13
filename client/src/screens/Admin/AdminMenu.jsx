import React from "react";
import AddIcon from "@mui/icons-material/Add";
// import BallotIcon from "@mui/icons-material/Ballot";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

export default function AdminMenu({ setTabSelector }) {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={() => setTabSelector("dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <Typography variant="subtitle2">Dashboard</Typography>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => setTabSelector("createProj")}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <Typography variant="subtitle2">Add Project</Typography>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => setTabSelector("addAdmin")}>
          <ListItemIcon>
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <Typography variant="subtitle2">Add Admin</Typography>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
