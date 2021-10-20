import { Authentication, AuthenticationParams } from '@/domain/usecases'
import { mockAccountModel } from '@/domain/test'
import { AccountModel } from '@/domain/model'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: AuthenticationParams
  async auth (params: AuthenticationParams): Promise<AccountModel> {
    this.params = params
    return await Promise.resolve(this.account)
  }
}
