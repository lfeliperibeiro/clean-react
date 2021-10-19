import React, { useState } from 'react'
import styles from '../login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false
  })

  const [errorState] = useState({
    errorMessage: '',
    email: 'Campo obrigatório',
    password: 'Campo obrigatório'
  })

  return (
        <div className={styles.login}>
            <LoginHeader/>
          <Context.Provider value={{ state, errorState }}>
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
