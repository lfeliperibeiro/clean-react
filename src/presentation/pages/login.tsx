import React from 'react'
import styles from './login-styles.scss'
import Spinner from '@/presentation/components/Spinner/Spinner'
import Logo from '@/presentation/components/logo/logo'

const Login: React.FC = () => {
  return (
        <div className={styles.login}>
               <header className={styles.header}>
                    <Logo/>
                   <h1>4Dev - Enquetes para programadores</h1>
               </header>
               <form className={styles.form}>
                   <h2>Login</h2>
                   <div className={styles.inputWrappper}>
                       <input type={'email'} name={'email'} placeholder={'Digite seu email'}/>
                       <span className={styles.status}>🔴</span>
                   </div>
                   <div className={styles.inputWrappper}>
                       <input type={'password'} name={'password'} placeholder={'Digite sua senha'}/>
                       <span className={styles.status}>🔴</span>
                   </div>
                   <button type="submit">Entrar</button>
                   <span className={styles.link}>Criar conta</span>
                   <div className={styles.erroWrapper}>
                       <Spinner className={styles.spinner}/>
                       <span className={styles.error}>Erro</span>
                   </div>
               </form>
               <footer className={styles.footer}/>
        </div>
  )
}

export default Login
