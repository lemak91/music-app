// import Box from "@mui/material/Box";
import Switch from './Switch';
import Slider from"./Slider";
import Select from "./Select";
import { Box, Container, Typography, Grid } from '@mui/material';
import Notifications from './Notifications';
import { useState } from 'react';
// import audioFile from "./1999.mp3"




function Dashboard() {

  const [ quality, setQuality ] = useState(20);
  const [ toggle, setToggle ] = useState(true);
  const [slider, setSlider] = useState(20);

  // function play() {
  //   new Audio(audioFile).play()
  // }



  return (
    <>
      {/* <audio src={play(audioFile)}></audio> */}
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: 42 }} color="text.secondary" gutterBottom>
          Welcome User!
        </Typography>
        <Box
          minWidth={10}
          maxWidth={3000}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mx: "2px",
            transform: "scale(.95)",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
              <Switch toggle={toggle} setToggle={setToggle} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Slider slider={slider} setSlider={setSlider} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Select quality={quality} setQuality={setQuality} />
            </Grid>
          </Grid>
        </Box>
        <Notifications quality={quality} slider={slider} toggle={toggle} />
      </Container>
    </>
  );
}

export default Dashboard;
