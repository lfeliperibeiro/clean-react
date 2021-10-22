import React from 'react'
import Login from '@/presentation/pages/Login/login'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote.authentication'
import { AxiosHttpAdapter } from '@/infra/http/axios-http-client/axios-http-client'
import { ValidationBuilder, ValidationComposite } from '@/validation/validators'

export const makeLogin: React.FC = () => {
  const url = 'http://fordevs.herokuapp.com/api/login'
  const axiosHttpClient = new AxiosHttpAdapter()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])
  return (
    <Login
      validation={validationComposite}
      authentication={remoteAuthentication}
    />
  )
}
