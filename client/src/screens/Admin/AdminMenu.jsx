import React from "react";
import AddIcon from "@mui/icons-material/Add";
import BallotIcon from "@mui/icons-material/Ballot";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export default function AdminMenu() {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <Typography variant="subtitle2">Dashboard</Typography>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <Typography variant="subtitle2">Add Project</Typography>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <BallotIcon />
          </ListItemIcon>
          <Typography variant="subtitle2">View All Project</Typography>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
