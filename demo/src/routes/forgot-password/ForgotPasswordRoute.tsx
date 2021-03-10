import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { ForgotPassword } from 'a6y-react-auth'

const ForgotPasswordRoute = () => {
  return (
    <MainLayout backNav={true}>
      <ForgotPassword />
    </MainLayout>
  )
}

export default ForgotPasswordRoute
