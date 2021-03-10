import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Auth } from 'a6y-react-auth'

const LoginRoute = () => {
  return (
    <MainLayout backNav={true}>
      <Auth />
    </MainLayout>
  )
}

export default LoginRoute
