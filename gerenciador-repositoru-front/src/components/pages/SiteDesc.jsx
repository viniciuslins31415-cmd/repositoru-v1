import styles from './SiteDesc.module.css'

function SiteDesc() {
    return (
        <div className={styles.cont}>
            <img src="logofin.png" alt="Logo do Repositoru" />
            <h2>Sobre o Repositoru</h2>
            <p>
                Repositoru é uma plataforma pessoal de gerenciamento e organização de
        conteúdos culturais, desenvolvida para centralizar livros, filmes e
        séries em um único ambiente intuitivo, moderno e eficiente. O site
        permite que o usuário registre suas obras consumidas ou em andamento,
        organize por categorias e gêneros, acompanhe seu histórico de consumo e
        mantenha um acervo pessoal sempre atualizado. Com uma proposta visual
        minimalista e foco total na experiência do usuário, o Repositoru elimina
        a dispersão de informações e transforma o controle de mídia em um
        processo simples e prazeroso.
            </p>
        </div>

    )
}

export default SiteDesc
