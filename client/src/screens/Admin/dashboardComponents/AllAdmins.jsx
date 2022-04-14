import {
  Alert,
  Avatar,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdmin } from "../../../redux/features/admin";
import Loading from "../../../components/Loading";
import { PF } from "../../../PublicFolder";

export default function AllAdmins() {
  // Store
  const { pending, error, allAdmins } = useSelector((state) => state.admin);

  // UseEffect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdmin());
  }, []);
  return (
    <>
      {pending ? (
        <Loading />
      ) : error ? (
        <Alert severity="error">Something Went Wrong...</Alert>
      ) : (
        <>
          <Typography variant="h5" align="center">
            Admin List
          </Typography>
          <Grid container flexDirection="column" alignItems="center">
            <Grid item>
              <List dense>
                {allAdmins &&
                  allAdmins.slice(0, 4).map((x, i) => (
                    <ListItem disablePadding key={i}>
                      <ListItemButton>
                        <Avatar
                          alt={x.username}
                          src={
                            x.profilePic
                              ? PF + "admin/" + x.profilePic
                              : PF + "00000no_231_image.jpg"
                          }
                          sx={{ width: 24, height: 24, mr: 2 }}
                        />
                        <ListItemText primary={x.username} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                {allAdmins.length > 4 && (
                  <Link href="#" underline="none">
                    <Typography
                      align="center"
                      variant="body2"
                      color="inherit"
                      sx={{
                        border: "1px solid grey",
                        borderRadius: "3rem",
                        mt: 1,
                        "&:hover": {
                          background: "grey",
                          color: "white",
                        },
                      }}
                    >
                      View All ({allAdmins.length})
                    </Typography>
                  </Link>
                )}
              </List>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
