import { Typography } from "@mui/material";

function Notifications({quality, toggle, slider }) {


  return (
    <>
      <Typography sx={{ fontSize: 38 }} color="text.secondary" gutterBottom>
        Notifications:
        {toggle ? null : (
          <Typography sx={{ fontSize: 18 }}>
            Your application is offline. You won't be able to share or stream
            music to other devices.
          </Typography>
        )}
        {slider < 80 ? null : (
          <Typography sx={{ fontSize: 18 }}>
            Listening to music at a high volume could cause long-term hearing
            loss.
          </Typography>
        )}
        {quality > 19 ? null : (
          <Typography sx={{ fontSize: 18 }}>
            Music quality is degraded. Increase quality if your connection
            allows it.
          </Typography>
        )}
      </Typography>
    </>
  );
}


export default Notifications;

