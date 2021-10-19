import React from 'react'
import styles from './input.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.inputWrappper}>
      <input {...props} />
      <span className={styles.status}>🔴</span>
    </div>
  )
}

export default Input
