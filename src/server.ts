import express from "express"
import cors from "cors"
import { router  as routes} from "./routes/routes"

const app  = express()
app.use(express.json())

app.use(cors({origin: true}))


app.use(routes)




 
app.listen(3333, () => console.log("Server is running on port 3333"))
 