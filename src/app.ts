import { Application, Request, Response } from "express"
import cors  from 'cors'
import express  from "express"
const app: Application = express()

//PARSER
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app;


// DATABASE_URL=mongodb+srv://advanced-crud:rakib@password@cluster0.48q4yql.mongodb.net/advanced-crud?retryWrites=true&w=majority
