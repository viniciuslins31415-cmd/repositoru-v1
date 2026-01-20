import { useEffect, useState } from 'react'
import Input from '../layout/Input'
import styles from './FilmesForm.module.css'

function FilmesForm({ text, handleSubmit = () => {} }) {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [showSuggestions, setShowSuggestions] = useState(false)

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY

    useEffect(() => {
        if (query.length < 2) {
            setMovies([])
            setShowSuggestions(false)
            return
        }

        const controller = new AbortController()

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`,
            { signal: controller.signal }
        )
            .then(resp => resp.json())
            .then(data => {
                setMovies(data.results || [])
                setShowSuggestions(true)
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    console.error(err)
                }
            })

        return () => controller.abort()
    }, [query, API_KEY])

    function handleSelectMovie(movie) {
        setSelectedMovie(movie)
        setQuery(movie.title)
        setShowSuggestions(false)
    }

    function submit(e) {
        e.preventDefault()

        if (!selectedMovie) {
            alert('Selecione um filme da lista')
            return
        }

        if (typeof handleSubmit !== 'function') {
            console.error('handleSubmit precisa ser uma função')
            return
        }

        handleSubmit(selectedMovie)
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <h2>{text}</h2>

            <div className={styles.autocomplete}>
                <Input
                    type="text"
                    placeholder="Digite o nome do filme"
                    value={query}
                    handleOnChange={(e) => {
                        setQuery(e.target.value)
                        setSelectedMovie(null)
                    }}
                    autoComplete="off"
                />

                {showSuggestions && movies.length > 0 && (
                    <ul className={styles.suggestions}>
                        {movies.slice(0, 6).map(movie => (
                            <li
                                key={movie.id}
                                onClick={() => handleSelectMovie(movie)}
                            >
                                <strong>{movie.title}</strong>
                                {movie.release_date && (
                                    <span> ({movie.release_date.slice(0, 4)})</span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}

                <button type="submit">Adicionar</button>
            </div>
        </form>
    )
}

export default FilmesForm
