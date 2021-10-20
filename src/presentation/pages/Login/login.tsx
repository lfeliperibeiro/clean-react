import React, { useEffect, useState } from 'react'
import styles from '../login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    errorMessage: '',
    emailError: '',
    passwordError: ''
  })

  useEffect(() => {
    setState((oldState) => ({ ...oldState, emailError: validation.validate('email', state.email) }))
  }, [state.email])

  useEffect(() => {
    setState((oldState) => ({ ...oldState, passwordError: validation.validate('password', state.password) }))
  }, [state.password])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setState({ ...state, isLoading: true })
  }

  return (
        <div className={styles.login}>
            <LoginHeader/>
          <Context.Provider value={{ state, setState }}>
               <form className={styles.form} onSubmit={handleSubmit}>
                   <h2>Login</h2>
                       <Input type={'email'} name={'email'} placeholder={'Digite seu email'}/>
                       <Input type={'password'} name={'password'} placeholder={'Digite sua senha'}/>
                   <button className={styles.submit} data-testid={'submit'} type="submit" disabled={!!state.emailError || !!state.passwordError}>Entrar</button>
                   <span className={styles.link}>Criar conta</span>
                <FormStatus/>
               </form>
          </Context.Provider>
            <Footer/>
        </div>
  )
}

export default Login
