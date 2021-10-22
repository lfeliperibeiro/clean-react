import { makeLoginValidation } from '@/main/factories/pages/login/login-validation-factory'
import { ValidationBuilder, ValidationComposite } from '@/validation/validators'

describe('LoginValidationFactory', () => {
  it('should make ValidationComposite with correct login', () => {
    const composite = makeLoginValidation()
    expect(composite).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('email').required().email().build(),
      ...ValidationBuilder.field('password').required().min(5).build()
    ]))
  })
})
