"use client"

import styles from './error.module.sass'

interface ErrorProps{
  error: Error;
  reset: ()=> void;
}

export default function Error({error, reset}:ErrorProps) {

  return (
    <div className={styles.ContainerError}>
      <h1 >:(</h1>
      <p >There has been an error....</p>
      <button onClick={reset} >Retry</button>
    </div>
  )
}

