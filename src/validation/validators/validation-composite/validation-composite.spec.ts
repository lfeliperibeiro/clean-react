import { FieldValidationSpy } from '../test/mock-field-validation'
import { ValidationComposite } from './validation-composite'
import faker from 'faker'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (fildName: string): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy(fildName),
    new FieldValidationSpy(fildName)
  ]
  const sut = ValidationComposite.build(fieldValidationsSpy)
  return {
    sut,
    fieldValidationsSpy
  }
}

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fildName = faker.database.column()
    const { sut, fieldValidationsSpy } = makeSut(fildName)
    const errorMessage = faker.random.words()
    fieldValidationsSpy[0].error = new Error(errorMessage)
    fieldValidationsSpy[1].error = new Error(faker.random.words())
    const error = sut.validate(fildName, faker.random.word())
    expect(error).toBe(error)
  })

  test('Should return falsy if there is validation no errors', () => {
    const fildName = faker.database.column()
    const { sut } = makeSut(fildName)
    const error = sut.validate('any_field', faker.random.word())
    expect(error).toBeFalsy()
  })
})
