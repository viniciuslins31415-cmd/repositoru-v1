import { useState, useEffect } from "react"

import styles from "./FilmesSeries.module.css"

import { IoMdAddCircle } from "react-icons/io"
import FilmesForm from "./FilmesForm"

function FilmesSeries() {
  const [movieForm, setMovieForm] = useState(false)
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  async function handleAddMovie(movie) {
    try {
      const response = await fetch('http://localhost:3000/filmes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            tmdb_id: movie.id,
            titulo: movie.title,
            sinopse: movie.overview,
            ano: movie.release_date?.slice(0, 4),
            poster: movie.poster_path,
            nota: movie.vote_average
          })
      })

      if (!response.ok) {
        throw new Error('Erro ao salvar filme')
      }

      const data = await response.json()
        console.log('Filme salvo:', data)
      
      await fetchFilmes()
      setMovieForm(false)

    } catch (error) {
        console.error(error)
      }
  } 

  async function fetchFilmes() {
    try {
      const response = await fetch('http://localhost:3000/filmes')

      if (!response.ok) {
        throw new Error('Erro ao buscar filmes')
      }

      const data = await response.json()
      setFilmes(data)
    } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
  }

  useEffect(() => {
    fetchFilmes()
  }, [])

  async function handleDeleteFilme(id) {
    
  try {
    const response = await fetch(
      `http://localhost:3000/filmes/${id}`,
      { method: 'DELETE' }
    )

    if (!response.ok) {
      throw new Error('Erro ao remover filme')
    }

    // Atualiza lista após deletar
    setFilmes(prev => prev.filter(filme => filme.id !== id))
  } catch (error) {
    console.error(error)
  }
}


  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1>🎥 Aventuras Cinematográficas</h1>
        <h2>Registre aqui seus filmes e séries assistidos</h2>
      </header>

      <div className={styles.actions}>
        <button
          className={styles.addButton}
          onClick={() => setMovieForm(true)}
        >
          <IoMdAddCircle />
          Adicionar Filme/Serie
        </button>
      </div>
      {movieForm &&
        <div>
          <FilmesForm
            text="Adcione um filme ou série:"
            handleSubmit={handleAddMovie}
          />
        </div>
      }

      {loading && <p>Carregando filmes...</p>}

  {!loading && filmes.length === 0 && (
    <p>Nenhum filme cadastrado ainda.</p>
  )}

  {!loading &&
    filmes.map(filme => (
      <div key={filme.id} className={styles.card}>
        {filme.poster && (
          <img
            src={`https://image.tmdb.org/t/p/w200${filme.poster}`}
            alt={filme.titulo}
          />
        )}

        <div>
          <h3>{filme.titulo}</h3>
          <p>{filme.ano}</p>
          <p>Nota: {filme.nota}</p>
          <p>Sinopse: {filme.sinopse}</p>
        </div>

        <button className={styles.deleteButton} onClick={() => handleDeleteFilme(filme.id)}> 
          Remover 
        </button>
        <button className={styles.editButton} onClick={() => handleEditFilme(filme.id)}> 
          Editar 
        </button>
      </div>
    ))}
    </section>
  )
}

export default FilmesSeries
