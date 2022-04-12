import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Box,
} from "@mui/material";
import CurrentProjects from "../components/CurrentProjects";

export default function Home() {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <>
      {/* Heading */}
      <Typography variant="h5" align="center">
        Imon's Portfolio
      </Typography>
      <Divider />

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
      <CurrentProjects activeTab={activeTab} />
    </>
  );
}
