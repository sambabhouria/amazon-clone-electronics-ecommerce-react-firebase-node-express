import express from 'express'
import dotenv from 'dotenv'
import data from './Data/data.js'
import connectDb from './config/db.js';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js'
import orderRouter from './routers/orderRouter.js';
import departmentRouter from './routers/departmentRouter.js';





dotenv.config();

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

    // simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome Server is runnnnning 🏃🏃🏃🏃🏃" });
});

connectDb();

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.use('/api/departments', departmentRouter)
app.use('/api/config/paypal', (req,res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})



/*
 // get phone data
*/
app.get('/api/phones', (req, res) => {
  res.send(data.phones)
})


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
})
