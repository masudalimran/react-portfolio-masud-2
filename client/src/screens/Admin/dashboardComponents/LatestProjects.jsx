import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function LatestProjects() {
  return (
    <>
      <Typography align="center">Latest Projects</Typography>
      <Grid container spacing={2}>
        {[...Array(10)].map((x, i) => (
          <Grid item>
            <Card sx={{ maxWidth: 280 }} key={i}>
              <CardActionArea>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Lizard
                </Typography>
                <CardContent>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                      >
                        Copy Link
                      </Button>
                    </Grid>

                    <Grid item>
                      <Grid container>
                        {[...Array(3)].map((x, i) => (
                          <Grid item key={i}>
                            <Avatar
                              alt="Remy Sharp"
                              src={`https://mui.com/static/images/avatar/${
                                i + 1
                              }.jpg`}
                              sx={{ width: 24, height: 24 }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
