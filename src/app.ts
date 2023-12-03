import { Application, Request, Response } from "express"
import cors  from 'cors'
import express  from "express"
import { userRoute } from "./app/modules/userModule/user.route"
const app: Application = express()

//PARSER
app.use(express.json())
app.use(cors())
app.use('/api/users', userRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app;


