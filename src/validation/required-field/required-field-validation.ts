import { FieldValidation } from '@/validation/protocols/field-validations'
import { RequiredFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}
  validate (value: string): Error {
    return new RequiredFieldError()
  }
}