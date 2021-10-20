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
    errorMessage: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório'
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  return (
        <div className={styles.login}>
            <LoginHeader/>
          <Context.Provider value={{ state, setState }}>
               <form className={styles.form}>
                   <h2>Login</h2>
                       <Input type={'email'} name={'email'} placeholder={'Digite seu email'}/>
                       <Input type={'password'} name={'password'} placeholder={'Digite sua senha'}/>
                   <button className={styles.submit} data-testid={'submit'} type="submit" disabled>Entrar</button>
                   <span className={styles.link}>Criar conta</span>
                <FormStatus/>
               </form>
          </Context.Provider>
            <Footer/>
        </div>
  )
}

export default Login
