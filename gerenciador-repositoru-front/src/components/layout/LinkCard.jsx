import { Link } from "react-router-dom"
import styles from './LinkCard.module.css'

function LinkCard({to, title, desc, src, alt}) {
    return (
        <Link to={to} className={styles.card}>
            <img src={src} alt={alt} />
            <h2>{title}</h2>
            <p>{desc}</p>
        </Link>
    )
}

export default LinkCard
