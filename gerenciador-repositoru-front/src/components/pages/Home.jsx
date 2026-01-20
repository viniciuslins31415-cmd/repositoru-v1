import LinkCard from "../layout/LinkCard"
import styles from './Home.module.css'

import { Link } from "react-router-dom"

function Home() {
    return (
        <div className={styles.container}>
            <Link to="desc">
                <img src="logofin.png" alt="logo" />
            </Link>
            <p>Centralize suas experiências com filmes, séries e livros em um só
            lugar.</p>
            <div className={styles.content}>
                <LinkCard
                to="filmesseries"
                title="🎬 Aventuras Cinematográficas"
                desc="Registre filmes e séries, avalie, marque gêneros e escreva suas interpretações."
                />

                <LinkCard
                to="livros"
                title="📚 Experiências Literárias"
                desc="Organize livros, anotações, ideias e reflexões pessoais sobre suas leituras."
                />
            </div>
        </div>
    )
}

export default Home
