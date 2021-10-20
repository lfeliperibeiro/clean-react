import React, { useContext } from 'react'
import styles from './form-status.scss'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, errorMessage } = state

  return (
    <div data-testid={'error-wrap'} className={styles.erroWrapper}>
      {isLoading && <Spinner className={styles.spinner}/>}
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  )
}

export default FormStatus
