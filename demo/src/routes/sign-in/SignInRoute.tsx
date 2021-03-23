import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { SignInContainer } from 'a6y-react-auth'

const SignInRoute = () => {
  return (
    <MainLayout backNav={true}>
      <SignInContainer onSuccess={(resp) => console.log('sign-in', resp)} />
    </MainLayout>
  )
}

export default SignInRoute
