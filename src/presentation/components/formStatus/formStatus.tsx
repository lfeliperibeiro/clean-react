import React from 'react'
import styles from './form-status.scss'
import Spinner from '@/presentation/components/Spinner/Spinner'

const FormStatus: React.FC = () => {
  return (
    <div className={styles.erroWrapper}>
      <Spinner className={styles.spinner}/>
      <span className={styles.error}>Erro</span>
    </div>
  )
}

export default FormStatus
