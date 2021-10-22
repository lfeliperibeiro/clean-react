import { AxiosHttpAdapter } from '@/infra/http/axios-http-client/axios-http-client'

export const makeAxiosHttpClient = (): AxiosHttpAdapter => {
  return new AxiosHttpAdapter()
}
