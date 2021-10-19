import React from 'react'
import styles from '../login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'

const Login: React.FC = () => {
  return (
        <div className={styles.login}>
            <LoginHeader/>
               <form className={styles.form}>
                   <h2>Login</h2>
                       <Input type={'email'} name={'email'} placeholder={'Digite seu email'}/>
                       <Input type={'password'} name={'password'} placeholder={'Digite sua senha'}/>
                   <button type="submit">Entrar</button>
                   <span className={styles.link}>Criar conta</span>
                <FormStatus/>
               </form>
            <Footer/>
        </div>
  )
}

export default Login
