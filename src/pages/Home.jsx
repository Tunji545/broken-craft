import React from 'react';
import { Box } from '@mui/system'
import { Divider, Grid, Typography } from '@mui/material'
import { theme } from "../theme/theme"
import Button from "../reusables/Button.jsx"
import bgImage from "../assets/background.png"
import Foreground from "../assets/foreground.png"
import { texts } from "../data/data"
import Person2 from "../assets/person2.png"
import { ReactComponent as Line } from "../assets/line.svg"
import { profiles } from "../data/data"

const root = {
  backgroundColor: "#f4f4f4",
  paddingLeft: theme.spacing(5),
  paddingBottom: theme.spacing(20.75),
  color: theme.palette.primary.main,
}
const background = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: theme.palette.secondary.main
}
const secondGrid = {
  paddingLeft: theme.spacing(5),
  paddingTop: theme.spacing(8.375),
  paddingBottom: theme.spacing(3.5),
  "& .MuiTypography-h5": {
    fontWeight: 700,
    fontSize: "1.75rem",
    lineHeight: "34.13px"
  },
  "& .MuiTypography-h6": {
    fontWeight: 500
  }
}

function Home() {
  return (
    <>
      <Box sx={root}>
        <Grid container columnSpacing={theme.spacing(10)}>
          <Grid item xs={12} sm={6}  paddingTop={theme.spacing(14.75)}>
            <Typography variant="h6" mb={theme.spacing(3)}>The revolution of artistry</Typography>
            <Typography variant="h2" mb={theme.spacing(3)}>Changing the narration of ART IN AFRICA</Typography>
            <Typography variant="h6" mb={theme.spacing(6.625)} mr="10%">
              Little Moments Where Knowledge Meets Art “Are we here to communicate? Are we here for cultural interchange? Then let us not be narrow. …
            </Typography>
            <Box component="span">
              <Button text="Discover" size="medium" sx={{marginRight: theme.spacing(5)}} />
              <Button 
                text="Upload  Art" 
                size="medium" 
                color="secondary" 
                sx={{fontSize: "Sacramento"}} 
                endIcon={<Line sx={{color: "#000"}} />}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{backgroundColor: "#000", padding: theme.spacing(2)}}>
            <Box sx={background}>
            <Box
              component="img"
              alt=""
              src={Foreground}
              zIndex={4}
              sx={{position: "relative", top: 35, right: 100}}
            />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container sx={secondGrid} spacing={theme.spacing(10)}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" mb={theme.spacing(8.375)}>Features Collection</Typography>
          <Typography variant="h6" gutterBottom>Art by Paul-D</Typography>
          <Typography variant="h2" mb={theme.spacing(3.75)}>THE LOOKOUT LOVER</Typography>
          <Typography variant="subtitle1" mb={theme.spacing(8.875)}>
            This art showcases contemporary African Artists and African Diaspora artists globally. Curated by Atim Annette Oton, each artist selected has work that deals with the complexities of the African experience. 
          </Typography>
          {texts.map((text, index) => 
          <Typography component="span" mr={theme.spacing(3)} key={index} variant="h6">{text}</Typography>)}
        </Grid>
        <Grid item xs={12} sm={4} mt={theme.spacing(13)}>
          <Box
            component="img"
            alt=""
            src={Person2}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box mt={theme.spacing(18.75)}>
            <Typography variant="h6" component="span" mr={theme.spacing(14.5)}>CURRENT BID</Typography>
            <Typography variant="h6" component="span">ENDING IN</Typography>
          </Box>
          <Box 
            sx={{
              fontWeight: 700, 
              fontSize: "1.375", 
              marginTop: theme.spacing(3.375),
              marginBottom: theme.spacing(3.375),
            }} 
          >
            <Typography variant="h5" component="span" mr={theme.spacing(14.5)}>12.05 ICP</Typography>
            <Typography variant="h5" component="span">5:20:14</Typography>
          </Box>
          <Button 
            text="PLACE A NEW BID" 
            size="large" 
            endIcon={<Line />} 
          />
          <Typography 
            variant="6" 
            component="div" 
            mt={theme.spacing(7)}
            mb={theme.spacing(4)}
          >
            BIDDING HISTORY
          </Typography>
          {profiles.map(profile => (
            <Box key={profile.id}>
              <Box sx={{float: "left", mr: theme.spacing(1)}}>
                {profile.person} 
              </Box>
              <Box>
                <Typography 
                  sx={{fontWeight: 700, fontFamily: "Montserrat"}}
                >
                  {profile.text1}
                </Typography>
                <Typography 
                  sx={{fontFamily: "Montserrat"}}
                >
                  {profile.text2}
                </Typography>
                <Divider sx={{clear: "both"}} />
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default Home
