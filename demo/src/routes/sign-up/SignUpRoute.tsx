import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { SignUp } from 'a6y-react-auth'

const SignUpRoute = () => {
  return (
    <MainLayout backNav={true}>
      <SignUp />
    </MainLayout>
  )
}

export default SignUpRoute
