import { Button, Grid, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Send } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [redAlert, setRedAlert] = useState("");

  const handleChange = (event: any) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    loginRequest();
  };

  const axios = require("axios").default;
  const history = useHistory();

  const loginRequest = async () => {
    axios({
      method: "post",
      url: `https://eildonlakemotel-api.herokuapp.com/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: loginDetails.email,
        password: loginDetails.password,
      },
    })
      .then((res: { data: { token: string } }) => {
        console.log(res.data.token);
        if (res.data) {
          localStorage.setItem("jwt", res.data.token);
          history.push("/admin");
        } else {
          console.log(res);
        }
      })
      .catch((e: any) => {
        console.log(e);
        setRedAlert(
          e.message.match(401)
            ? "Invalid username or password"
            : "Server error, please contact support"
        );
      });
  };

  return (
    <Grid
      container
      item
      xs={12}
      direction="column"
      spacing={2}
      alignItems="center"
    >
      <Grid item xs>
        <Typography variant="h6" component="h1">
          Log In
        </Typography>
      </Grid>
      <Grid item xs>
        {redAlert && <Typography variant="subtitle2">{redAlert}</Typography>}
      </Grid>
      <form onSubmit={handleLogin}>
        <Grid container direction="column" spacing={2} alignItems="center">
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={loginDetails.email}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={loginDetails.password}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              disabled={
                !(loginDetails.email.length && loginDetails.password.length)
              }
              color="primary"
              endIcon={<Send />}
              type="submit"
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
