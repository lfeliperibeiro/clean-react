import React from 'react'
import Login from '@/presentation/pages/Login/login'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'
import { makeLoginValidation } from '@/main/factories/pages/login/login-validation-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      validation={makeLoginValidation()}
      authentication={makeRemoteAuthentication()}
    />
  )
}
