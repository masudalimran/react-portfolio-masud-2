import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Divider, Grid, Box, Link } from "@mui/material";
import Projects from "../components/Projects";

export default function Home() {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <>
      {/* Heading */}
      <Grid container justifyContent="flex-end">
        <Grid item xs={10}>
          <Typography variant="h5" align="center">
            Imon's Portfolio
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Link href="/admin" underline="none" target="_blank">
            <Button variant="contained" color="error" size="small">
              Admin Area
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 1 }} />

      {/* Selectors */}
      <Grid container justifyContent="center" sx={{ mt: 1 }} spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            size="small"
            color="info"
            onClick={() => setActiveTab("current")}
          >
            Current
          </Button>
          {activeTab === "current" && (
            <Box sx={{ borderBottom: "0.2rem solid black", mt: 0.5 }}></Box>
          )}
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </Button>
          {activeTab === "completed" && (
            <Box sx={{ borderBottom: "0.2rem solid black", mt: 0.5 }}></Box>
          )}
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="small"
            color="warning"
            onClick={() => setActiveTab("willDo")}
          >
            Will Do
          </Button>
          {activeTab === "willDo" && (
            <Box sx={{ borderBottom: "0.2rem solid black", mt: 0.5 }}></Box>
          )}
        </Grid>
      </Grid>
      {/* Current projects */}
      <Projects activeTab={activeTab} />
    </>
  );
}
