import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export default function AllAdmins() {
  return (
    <>
      <Typography variant="h5" align="center">
        Admin List
      </Typography>
      <Grid container flexDirection="column" alignItems="center">
        <Grid item>
          <List dense>
            {[...Array(5)].map((x, i) => (
              <ListItem disablePadding key={i}>
                <ListItemButton>
                  <Avatar
                    alt="Remy Sharp"
                    src={`https://mui.com/static/images/avatar/${i + 1}.jpg`}
                    sx={{ width: 24, height: 24, mr: 2 }}
                  />
                  <ListItemText primary={` Admin ${i}`} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
}
