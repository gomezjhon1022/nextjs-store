import styles from './Footer.module.sass'

export const Footer= () => {
  return (
    <footer className={styles.Footer}>
      <p>Digital Destiny Store © {new Date().getFullYear()}</p>
    </footer>
  )
}