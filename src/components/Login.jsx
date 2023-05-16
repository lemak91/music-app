import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const styleTextField = {
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
};

// eslint-disable-next-line react/prop-types
function Login({ handleLogin }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="40vh"
      component="form"
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2} direction="column" sx={{ width: "50%" }}>
        <TextField
          sx={styleTextField}
          label="Username"
          variant="outlined"
        />
        <TextField
          sx={styleTextField}
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button
          onClick={handleLogin}
          variant="contained"
          sx={{
            ":hover": {
              bgcolor: "grey",
              color: "white",
            },
            color: "white",
            backgroundColor: "black",
          }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default Login;
