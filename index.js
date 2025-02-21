
require('dotenv').config()
const express=require('express')
const PORT=process.env.PORT || 3000
const app=express()
//cors setup for cross origin requests
const cors=require('cors')
app.use(cors(
    {
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST"],
        credentials: true
    }
))




//enables parsing json response
app.use(express.json())


//api endpoints
const router=require('./routes/index.js')
app.use('/api',router)


//db connection
const connectDB=require('./db/connectDb')
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`app running on http://localhost:${PORT}/`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})