import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { SignIn } from '@altalogy/a6y-react-auth'

const SignInRoute = () => {
  return (
    <MainLayout backNav={true}>
      <SignIn />
    </MainLayout>
  )
}

export default SignInRoute
