import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SignInPage } from "@toolpad/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const providers = [{ id: "credentials", name: "Email and age" }];
  const [showPassword, setShowPassword] = useState(false);

  const signin = (providers, formData) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        alert(
          `Signing with ${providers.name} and credentials: ${formData.get("email")},${formData.get("password")}`
        );
      }, 300);
      resolve();
    });
  };
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
        <h6 style={{ fontSize: "1em" }}>Sign in</h6>
      </Typography>
    );
  };
  const subTitle = () => {
    return (
      <Typography fontSize={13} sx={{ color: "text.main" }}>
        <p>Welcome user, please sign in to continue</p>
      </Typography>
    );
  };

  const forgotPassword = () => {
    return (
    <Link>Forgot password?</Link>
  );
  };
  const signUpLink = () => {
    return (
      <Stack flexDirection="row" alignItems="center">
        <Typography fontSize={14.5}>
          Do'nt have an account? &nbsp;
          <Link>Sign up</Link>
        </Typography>
      </Stack>
    );
  };

  return (
    <Container>
      <SignInPage
        signIn={signin}
        providers={providers}
        slotProps={{ submitButton: { color: "success" } }}
        slots={{
          title: title,
          subtitle: subTitle,
          signUpLink: signUpLink,
          forgotPasswordLink: forgotPassword,
        }}
      />
    </Container>
  );
};

export default LoginPage;
