import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function CreateProject() {
  // Use State
  const [addTagDialogue, setAddTagDialogue] = useState(false);

  // Functions
  const handleCreateProject = (e) => {
    e.preventDefault();
    console.log("code ran");
  };
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ textDecoration: "underline" }}
      >
        Add Project
      </Typography>
      <Box component="form" onSubmit={(e) => handleCreateProject(e)}>
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
        <Grid container flexDirection="column" alignItems="center" spacing={2}>
          <Grid item sx={{ width: "90%" }}>
            <TextField
              fullWidth
              required
              label="Project Name"
              type="search"
              variant="standard"
              autoFocus
            />
          </Grid>
          <Grid item sx={{ width: "90%" }}>
            <TextField
              fullWidth
              required
              label="Short Description"
              type="search"
              variant="standard"
            />
          </Grid>
          <Grid item sx={{ width: "90%" }}>
            <TextField
              required
              fullWidth
              label="Project Link"
              type="url"
              variant="standard"
            />
          </Grid>
          <Grid item sx={{ width: "90%" }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item sx={{ flexGrow: 1 }}>
                <Autocomplete
                  fullWidth
                  multiple
                  id="tags-outlined"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Category Tags (up to 3)"
                      placeholder="Choose Tags"
                      variant="standard"
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => setAddTagDialogue(true)}
                >
                  Add Tag
                </Button>
                {/* Add Tag Dialogue */}
                <Dialog
                  open={addTagDialogue}
                  onClose={() => setAddTagDialogue(false)}
                  aria-labelledby="add-tag"
                  aria-describedby="add-additional-tags"
                >
                  <DialogTitle id="add-tag-title">{"Add Tag"}</DialogTitle>
                  <DialogContent>
                    <TextField
                      required
                      label="Tag Name"
                      variant="standard"
                    ></TextField>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => setAddTagDialogue(false)}
                      color="error"
                    >
                      Cancel
                    </Button>
                    <Button onClick={() => setAddTagDialogue(false)} autoFocus>
                      Add Tag
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ width: "90%" }}>
            <Button variant="contained" fullWidth type="submit">
              Publish
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
