import {
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function AddAdmin() {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ textDecoration: "underline" }}
      >
        Add Admin
      </Typography>
      <Box component="form">
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <img
              src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Halloween party"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "150px",
              }}
            />
            <Typography variant="body2" align="center" color="secondary">
              Recommended: 🖼️(1200x600)
            </Typography>
          </Grid>
          <Grid item position="absolute">
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                sx={{ display: "none" }}
                //   onChange={(e) => setBlogImage(e.target.files[0])}
              />
              <IconButton
                color="primary"
                aria-label="upload-picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Grid>
        </Grid>
        <Grid container flexDirection="column" alignItems="center" spacing={1}>
          <Grid item sx={{ width: "90%" }}>
            <TextField
              required
              fullWidth
              label="Username"
              type="text"
              variant="standard"
            />
          </Grid>
          <Grid item sx={{ width: "90%" }}>
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              variant="standard"
            />
          </Grid>
          <Grid item sx={{ width: "90%" }}>
            <Button variant="contained" fullWidth type="submit">
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
