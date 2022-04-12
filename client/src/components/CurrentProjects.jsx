import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function CurrentProjects({ activeTab }) {
  return (
    <Grid container justifyContent="center" spacing={2} sx={{ my: 1 }}>
      {[
        ...Array(
          activeTab === "current"
            ? 8
            : activeTab === "completed"
            ? 6
            : activeTab === "willDo" && 4
        ),
      ].map((x, i) => (
        <Grid item key={i}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={
                  activeTab === "current"
                    ? "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    : activeTab === "completed"
                    ? "https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    : activeTab === "willDo" &&
                      "https://images.unsplash.com/photo-1648737963059-59ec8e2d50c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
                alt={x}
                title={x}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {activeTab === "current"
                    ? "Current Project"
                    : activeTab === "completed"
                    ? "Completed Project"
                    : activeTab === "willDo" && "Future Project"}{" "}
                  {i + 1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
