import { useState } from "react"
import Modal from "../layout/Modal"
import styles from "./Livros.module.css"
import { IoMdAddCircle } from "react-icons/io"

function Livros() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1>📙 Experiências Literárias</h1>
        <h2>Gerencie suas leituras aqui</h2>
      </header>

      <div className={styles.actions}>
        <button
          className={styles.addButton}
          onClick={() => setIsModalOpen(true)}
        >
          <IoMdAddCircle />
          Adicionar Livro
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Adicionar livro..."
        val1="Livro"
        val2="História em quadrinhos"
        src="bookicon.png"
        alt="bookicon"
      >
      </Modal>
    </section>
  )
}

export default Livros
