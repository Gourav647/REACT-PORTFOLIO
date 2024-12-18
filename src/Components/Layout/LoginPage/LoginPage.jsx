import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material'
import { SignInPage } from '@toolpad/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const providers = [{ id: 'credentials', name: 'Email and Password' }];
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };


  const title = () => {
    return (
      <Typography fontSize={30} fontWeight={600}>
        <h6 style={{ fontSize: "1em" }}>
          Sign in
        </h6>
      </Typography>
    )
  }
  const subTitle = () => {
    return (
      <Typography fontSize={13} sx={{ color: "text.dark" }}>
        <p>
          Welcome user, please sign in to continue
        </p>
      </Typography>
    )
  }

  const forgotPassword = () => {
    return (
      <Link>
        Forgot password?
      </Link>
    )
  }
  const signUpLink = () => {
    return (
      <Stack flexDirection="row" alignItems="center">
        <Typography fontSize={14.5}>
          Do'nt have an account? &nbsp;
          <Link>
            Sign up
          </Link>
        </Typography>
      </Stack>
    )
  }

  const passwordFeild = () =>
    <FormControl>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? 'hide the password' : 'display the password'
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>

  return (
    <Container>
      <SignInPage
        signIn={true}
        providers={providers}
        slotProps={{ submitButton: { color: "success" } }}
        slots={{ title: title, subtitle: subTitle, signUpLink: signUpLink, forgotPasswordLink: forgotPassword, passwordField: passwordFeild }}
      />
    </Container>
  )
}

export default LoginPage
