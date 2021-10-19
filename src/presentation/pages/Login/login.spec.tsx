import React from 'react'
import { render } from '@testing-library/react'
import Login from '@/presentation/pages/Login/login'

describe('LoginPage', () => {
  it('should start with initial state', () => {
    const { getByTestId } = render(<Login/>)
    const erroWrapper = getByTestId('error-wrap')
    expect(erroWrapper.childElementCount).toBe(0)
    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
})
