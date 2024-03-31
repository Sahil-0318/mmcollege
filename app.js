import 'dotenv/config'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import express from 'express'
const app = express()
const port = process.env.PORT || 3000

import signupRouter from './routes/signupRouter.js'
import loginRouter from './routes/loginRouter.js'
import userRouter from './routes/userRouter.js'
import adminRouter from './routes/adminRouter.js'

//DB Connection
mongoose.connect(process.env.DB_CONNECTION).then(()=>{
  console.log('DB Connected Successfully');
}).catch((err)=>{
  console.log(err);
})

app.use(cookieParser())


// Set template engine
app.set("view engine", "ejs");
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Load routes
app.use('/', signupRouter)
app.use('/', loginRouter)
app.use('/', userRouter)
app.use('/', adminRouter)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})