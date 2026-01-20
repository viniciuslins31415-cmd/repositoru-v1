import { inserirFilme, listarFilmes, removerFilme } from '../models/filmesModel.js'

export async function criarFilme(req, res) {
  try {
    const filme = req.body
    const resultado = await inserirFilme(filme)
    res.status(201).json(resultado)
  } catch (error) {
    res.status(400).json({ erro: error.message })
  }
}

export async function buscarFilmes(req, res) {
  try {
    const filmes = await listarFilmes()
    res.json(filmes)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}

export async function deletarFilme(req, res) {
  const { id } = req.params
  await removerFilme(id)
  res.status(204).send()
}

