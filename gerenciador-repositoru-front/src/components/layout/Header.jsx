import { Link } from "react-router-dom"
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa"

import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img src="logofin1.png" alt="Repositoru"/>
            </Link>

            <ul className={styles.socialIcons}>
                <li>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/viniciuslins31415-cmd/gerenciador-repositoru" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebook />
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header
