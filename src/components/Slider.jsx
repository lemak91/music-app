import { useState } from "react";
import Slider from "@mui/material/Slider";
import { CardContent, Card, Typography } from "@mui/material";
import audioFile from "./1999.mp3";


const Sliderr = ({slider, setSlider}) => {



  function handleRangeSlider(event) {
    setSlider(event.target.value);
      // new Audio(audioFile).play();
  }

  //  function play() {
  //    new Audio(audioFile).play();
  //  }

  

  // console.log(slider)



  return (
    <>
      <Card
        sx={{
          minWidth: 250,
          minHeight: 200,
          maxHeight: 200,
          maxWidth: 250,
          m: 2,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
            Master Volume
          </Typography>
          <br></br>
          {/* <audio src={play(audioFile)}></audio> */}
          <Typography variant="body2">
            Overrides all other sound settings in the application
          </Typography>
          <br></br>
          <div>
            <div style={{ width: "200px" }}>
              <Slider
                size="small"
                min={0}
                max={100}
                step={10}
                defaultValue={50}
                valueLabelDisplay="auto"
                value={slider}
                onChange={handleRangeSlider}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};


export default Sliderr;
