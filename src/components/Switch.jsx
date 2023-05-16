import Switch from "@mui/material/Switch";
import { Card, CardContent, Typography } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches({toggle, setToggle}) {

  const handleChange = () => {
    setToggle(!toggle)
  }

  // console.log(toggle)


  return (
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
          Online Mode
        </Typography>
        <br></br>
        <Typography variant="body2">
          Is this application connected to the internet?
        </Typography>
        <br></br>
        <div>
          <Switch defaultChecked onChange={handleChange} {...label} />
        </div>
      </CardContent>
    </Card>
  );
}
