import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string

  validate (fildName: string, fildValue: string): string {
    return this.errorMessage
  }
}
