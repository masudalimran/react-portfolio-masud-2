import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import AllAdmins from "./dashboardComponents/AllAdmins";
import LatestProjects from "./dashboardComponents/LatestProjects";

export default function DashBoard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            {/* <LatestProjects /> */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <AllAdmins />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <LatestProjects />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
