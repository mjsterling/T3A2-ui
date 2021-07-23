import { Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useState} from 'react'

export default function Login() {
  // event: { preventDefault: () => void; }

  const [loginDetails, setLoginDetails] = useState({
    email:'',
    password:''
  })

  const handleChange = (event:any) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value
    })
  }

  const handleLogin = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <Grid container direction="column" spacing={2} alignItems="center">
      <form onSubmit={handleLogin}>
        <Grid container direction='column' spacing={5} alignItems="center">
          <Grid item>
            <TextField 
            id="outlined-basic"
            label="email" 
            variant="outlined" 
            name='email'
            value={loginDetails.email}
            onChange={(e)=>handleChange(e)}/>
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              name='password'
              value={loginDetails.password}
              onChange={(e)=>handleChange(e)}
            />
          </Grid>
          <Grid item>
            <Button variant="outlined" type="submit">
              Log In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
