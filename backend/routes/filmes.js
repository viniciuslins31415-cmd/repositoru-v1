import express from 'express'
import { criarFilme, buscarFilmes, deletarFilme } from '../controllers/filmesController.js'

const router = express.Router()

router.post('/', criarFilme)
router.get('/', buscarFilmes)
router.delete('/:id', deletarFilme)

export default router
