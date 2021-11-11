import React from 'react';
import { Box } from '@mui/system'
import { Divider, Grid, Typography } from '@mui/material'
import { theme } from "../theme/theme"
import Button from "../reusables/Button.jsx"
import bgImage from "../assets/background.png"
import { texts } from "../data/data"
import Person2 from "../assets/person2.png"
import { Line } from "../assets/Line.js"
import { profiles } from "../data/data"
import { data } from "../data/data"
import { ReactComponent as Circles } from "../assets/circles.svg"
import Craft from "../assets/craft.png";
import {ReactComponent as Arrow} from "../assets/arrow-right.svg"

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
const craft = {
  position: "relative", 
  top: 77, 
  right: 100,
  paddingBottom: theme.spacing(9)
}
const box = {
  position: "absolute",
  right: 340,
  bottom: 90,
  width: theme.spacing(38.75),
  height: theme.spacing(10),
  backgroundColor: theme.palette.primary.main,
  background: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), rgba(255, 255, 255, 0.54)",
  backdropFilter: "blur(4px)",
  borderRadius: "10px",
  zIndex: 6,
  color: theme.palette.secondary.main,
  fontWeight: 500,
  padding: theme.spacing(1)
};

const box2 = {
  backgroundColor: theme.palette.primary.main, 
  color: theme.palette.secondary.main,
  display: "flex",
  "& .MuiButton-contained": {
    backgroundColor: "#B59D23",
    fontSize: "12px",
    marginLeft: theme.spacing(5),
  }
}

const note = (
  <>
    By placing this bid, we reserve funds from your ICP account till the end of the auction. This is to confirm the seriousness of your intentions. <strong>We will refund if you are outbid.</strong>
  </>
)

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
                sx={{fontFamily: "Sacramento", fontWeight: 700}} 
                endIcon={<Line color="#000" />}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{backgroundColor: "#000", padding: theme.spacing(3.5)}}>
            <Box sx={background}>
              <Box component="span" position="absolute" right={100} top="50%">
                <Arrow />
              </Box>
              <Box position="relative">
                <Box
                  component="img"
                  alt=""
                  src={Craft}
                  zIndex={4}
                  sx={craft}
                  border="20px solid #fff"
                />
                <Box sx={box}>
                  <Box sx={{display: "flex", justifyContent: "space-between", paddingBottom: theme.spacing(2)}}>
                    <Typography variant="h6" component="span">Current Bid</Typography>
                    <Typography variant="h6" component="span">0.24ICP</Typography>
                  </Box>
                  <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography variant="h6" component="span">Ends in:</Typography>
                    <Typography variant="h6" component="span">10:09:23</Typography>
                  </Box>
                </Box>
                <Box position="relative" bottom={15} right={50} sx={box2}>
                  <Box>
                    <Typography variant="h6">ICP TOKENS</Typography>
                    <Typography variant="h6">Dfinity ICP Tokens</Typography>
                  </Box>
                  <Button text="PLACE BID" />
                </Box>
              </Box>
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
            mb={theme.spacing(10)}
          />
          <Box textAlign="center">
            <Circles />
          </Box>
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
            endIcon={<Line color="#fff"  />} 
            sx={{paddingRight: 25, ".MuiButton-endIcon": {position: "absolute", right: 25}}}
          />
          <Typography 
            variant="6" 
            component="div" 
            mt={theme.spacing(7)}
            mb={theme.spacing(4)}
          >
            BIDDING HISTORY
          </Typography>
          <Grid container>
            <Grid item xs={9}>
              {profiles.map(profile => (
                <Box key={profile.id}>
                  <Box sx={{float: "left", mr: theme.spacing(1)}}>
                    {profile.person} 
                  </Box>
                  <Box sx={{position: "relative", top: 5}}>
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
            <Grid item xs={3}>
              {data.map(date => (
                <Box marginBottom={theme.spacing(2)}>
                  <Typography variant="body1" sx={{fontSize: 14}}>{date.date}</Typography>
                  <Typography 
                    variant="subtitle1" 
                    sx={{fontSize: 14}}
                  >
                    {date.time}
                  </Typography>
                </Box>
              ))}
            </Grid>
            <Typography mt={theme.spacing(6.75)} variant="subtitle1">{note}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
