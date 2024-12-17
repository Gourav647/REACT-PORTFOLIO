import { Container } from '@mui/material'
import { SignInPage } from '@toolpad/core'
import React from 'react'

const LoginPage = () => {
    const providers = [{ id: 'credentials', name: 'Email and Password' }];
  return (
    <Container>
      <SignInPage
      signIn={true}
      providers={providers}
      />
    </Container>
  )
}

export default LoginPage
