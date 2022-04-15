import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Auth } from '@altalogy/a6y-react-auth'

const LoginRoute = () => {
  return (
    <MainLayout backNav={true}>
      <Auth onSuccess={response => console.log('resp', response)} />
    </MainLayout>
  )
}

export default LoginRoute
