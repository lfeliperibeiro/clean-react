import React from 'react'
import { render } from '@testing-library/react'
import Login from '@/presentation/pages/Login/login'

describe('LoginPage', () => {
  it('should not render spinner and error on start', () => {
    const { getByTestId } = render(<Login/>)
    const erroWrapper = getByTestId('error-wrap')
    expect(erroWrapper.childElementCount).toBe(0)
  })
})
