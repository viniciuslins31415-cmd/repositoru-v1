import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import filmesRoutes from './routes/filmes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/filmes', filmesRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`)
})
