import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span className={styles.breand}>Repositoru</span> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
