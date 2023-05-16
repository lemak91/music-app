import { FormControl, Select, MenuItem, Card, CardContent, Typography } from "@mui/material";



function Selector({quality, setQuality}) {

  const handleChange = (e) => {
    setQuality(e.target.value)
  };

  console.log(quality)

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
            Sound Quality
          </Typography>
          <br></br>
          <Typography variant="body2">
            Manually control the muisc quality in event of poor connection
          </Typography>
          <br></br>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={quality}
              onChange={handleChange}
              style={{ height: 40, width: 150 }}
            >
              <MenuItem value={10}>Low</MenuItem>
              <MenuItem value={20}>Normal</MenuItem>
              <MenuItem value={30}>High</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
}

export default Selector