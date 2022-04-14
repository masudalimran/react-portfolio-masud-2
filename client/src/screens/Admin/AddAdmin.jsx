import {
  Alert,
  Box,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LoadingButton from "@mui/lab/LoadingButton";
import { PF } from "../../PublicFolder";
import { useDispatch, useSelector } from "react-redux";
import { addAdmin, uploadAdminPP } from "../../redux/features/admin";

export default function AddAdmin() {
  // States
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [matchedPass, setMatchedPass] = useState(true);
  const [passError, setPassError] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  // SnackBar
  const [snackOpen, setSnackOpen] = useState(false);

  // Use Effect
  // Password Check
  useEffect(() => {
    if (pass.length === 0 || confirmPass.length > pass.length)
      setMatchedPass(false);
    else if (confirmPass.length <= pass.length) {
      if (pass.slice(0, confirmPass.length) !== confirmPass) setPassError(true);
      else {
        setPassError(false);
        if (confirmPass === pass) setMatchedPass(true);
        else setMatchedPass(false);
      }
    }
  }, [confirmPass, pass]);

  // Store
  const { pending, error, adminPP } = useSelector((state) => state.admin);

  // Functions
  const dispatch = useDispatch();
  const handleAdminAdd = (e) => {
    e.preventDefault();
    const newAdmin = {
      username,
      password: pass,
    };
    const data = new FormData();
    const ext = profilePic.name.split(".");
    const filename =
      Date.now() +
      "-" +
      username.replace(/\s+/g, "") +
      "-profilePic." +
      ext.slice(-1);
    data.append("name", filename);
    data.append("profilePic", profilePic);
    newAdmin.profilePic = filename;
    dispatch(uploadAdminPP(data));
    dispatch(addAdmin(newAdmin));
    setSnackOpen(true);
    setProfilePic("");
  };
  return (
    <>
      {!pending && (
        <>
          <Typography
            variant="h4"
            align="center"
            sx={{ textDecoration: "underline" }}
          >
            Add Admin
          </Typography>
          <Box component="form" onSubmit={handleAdminAdd}>
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img
                  src={
                    profilePic !== ""
                      ? URL.createObjectURL(profilePic)
                      : PF + "00000no_231_image.jpg"
                  }
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
                    onChange={(e) => setProfilePic(e.target.files[0])}
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
            <Grid
              container
              flexDirection="column"
              alignItems="center"
              spacing={1}
            >
              <Grid item sx={{ width: "90%" }}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  type="text"
                  variant="standard"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item sx={{ width: "90%" }}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  variant="standard"
                  type={showPass ? "text" : "password"}
                  onChange={(e) => setPass(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPass(!showPass)}>
                          {showPass ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sx={{ width: "90%" }}>
                <TextField
                  required
                  fullWidth
                  label="Confirm Password"
                  variant="standard"
                  error={passError}
                  type={showConfirmPass ? "text" : "password"}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowConfirmPass(!showConfirmPass)}
                        >
                          {showConfirmPass ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              {pending.message && (
                <Alert severity="error">{pending.message}</Alert>
              )}
              {error && <Alert severity="error">Something Went Wrong...</Alert>}
              <Grid item sx={{ width: "90%" }}>
                <LoadingButton
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                  type="submit"
                  disabled={!matchedPass}
                  loading={pending}
                  loadingPosition="end"
                  variant="contained"
                >
                  Add
                </LoadingButton>
              </Grid>
            </Grid>
            {/* SnackBar */}
            <Snackbar
              open={snackOpen}
              autoHideDuration={6000}
              onClose={() => setSnackOpen(false)}
            >
              <Alert
                onClose={() => setSnackOpen(false)}
                severity="success"
                sx={{ width: "100%" }}
                variant="filled"
              >
                Success! {adminPP.message && adminPP.message}
              </Alert>
            </Snackbar>
          </Box>{" "}
        </>
      )}
    </>
  );
}
