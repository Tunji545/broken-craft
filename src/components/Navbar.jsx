import React from 'react'
import { AppBar, Divider, Grid, InputBase, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { theme } from "../theme/theme";
import { ReactComponent as Ball } from "../assets/logo.svg"
import { ReactComponent as Person } from "../assets/person.svg"
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

const root = {
  backgroundColor: "#f4f4f4",
  color: "#000000",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(8.125),
  "& a": {
    textDecoration: "none",
    color: "#000000",
  }
}

function Navbar() {

  return (
    <AppBar sx={root} position="static" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Link to="/">
              <Box  sx={{float: "left"}} mr={theme.spacing(2)}>
                  <Ball />
              </Box>
              <Typography 
                sx={{fontFamily: "Sacramento", position: "relative", top: 10}} 
                variant="h5" 
                component="span">
                  Broken Crafts
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/arts">
              <Typography variant="h6" component="span" mr={5}>Artworks</Typography>
            </Link>
            <Link to="/how">
              <Typography variant="h6" component="span" mr={5}>How it works</Typography>
            </Link>
            <Link to="/community">
              <Typography variant="h6" component="span">Creator Community</Typography>
            </Link>
            <InputBase 
              startAdornment={<SearchIcon fontSize="small" />}
              sx={{position: "relative", top: 5, marginLeft: theme.spacing(2), width: 100, opacity: 0.6}}
              size="small"
              
            />
          </Grid>
          <Grid item>
              <Box  sx={{float: "left"}} mr={1.5}>
                <Link to="profile">
                  <Person />
                </Link>
              </Box>
              <Box display="flex" flexDirection="column" sx={{position: "relative", top: 5}}>
                <Typography variant="body1" component="span">Hello Ibrahim</Typography>
                <Typography variant="subtitle1" component="span">My Collections</Typography>
              </Box>
          </Grid>
        </Grid>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}

export default Navbar
