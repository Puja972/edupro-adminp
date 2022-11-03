import React from "react";
import {
  TextField,
  Typography,
  Box,
  Button,
  
} from "@mui/material";

const Loginform = () => {
  // const [value, setvalue] = useState();
  // const theme = useTheme();
  // console.log(theme);
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);

  // const [inputs, setInputs] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (e) => {
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  // const [open, setOpen] = useState(false);

  return (
    <>
      {/* <Button
        
        sx={{ marginLeft: "auto" }}
        variant="contained"
      >
        Login{""}
      </Button> */}
      <div>
          <form>
            <Box
              display="flex"
              flexDirection={"column"}
              maxWidth={400}
              alignItems="center"
              justifyContent={"center"}
              margin="auto"
              marginTop={2}
              padding={5}
              borderRadius={5}
              boxShadow={"5px 5px 10px #ccc"}
              sx={{
                ":hover": {
                  boxShadow: "10px 10px 20px #ccc",
                },
              }}
            >
              <Typography variant="h2" padding={3} textAlign="center">
                Login
              </Typography>
              <TextField
                name="name"
                margin="normal"
                type={"text"}
                varient="outlined"
                placeholder="Name"
              />
              <TextField
                name="email"
                margin="normal"
                type={"email"}
                varient="outlined"
                placeholder="Email"
              />
              <TextField
                name="password"
                margin="normal"
                type={"password"}
                varient="outlined"
                placeholder="Password"
              />
              <Button
                sx={{ marginTop: 3, borderRadius: 3 }}
                varient="contained"
                color="warning"
             
              >
                Login
              </Button>
            </Box>
          </form>
      </div>
    </>
  );
};

export default Loginform;
