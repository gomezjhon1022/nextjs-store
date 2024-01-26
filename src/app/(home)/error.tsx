"use client"

import { useEffect } from 'react';
import styles from './error.module.sass'

interface ErrorProps{
  error: Error;
  reset: ()=> void;
}

export default function Error({error, reset}:ErrorProps) {

  useEffect(() => {
    console.log(error)
  }, [error])
  return (
    <div className={styles.ContainerError}>
      <h1 >:(</h1>
      <p >There has been an error....</p>
      <button onClick={reset} >Retry</button>
    </div>
  )
}

