import React, { useContext } from 'react'
import styles from './form-status.scss'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)

  return (
    <div data-testid={'error-wrap'} className={styles.erroWrapper}>
      {state.isLoading && <Spinner className={styles.spinner}/>}
      {errorState.errorMessage && <span className={styles.error}>{errorState.errorMessage}</span>}
    </div>
  )
}

export default FormStatus
