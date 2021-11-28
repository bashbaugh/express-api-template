import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

const api = express()

api.disable('x-powered-by')

api.use(
  cors({
    origin: false,
    // allowedHeaders: ['Authorization'],
    maxAge: 7200,
  })
)

api.get('/', (_, res) => {
  res.send('Hey 😎')
})

api.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err)
  res.status(500).json({ error: 'Something went wrong' })
})

async function start() {
  api.listen(process.env.PORT || 3001, () => console.log('🤘 API Listening 🧨'))
}

start()
