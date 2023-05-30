require("./db/config")
const express= require("express");
const app = express();
const dotenv = require("dotenv")
const router = require("./routes/index")
dotenv.config()
const cors= require("cors")


app.use(cors());
app.use(express.json())



app.use("/",router)

const PORT= process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log("PORT",PORT)
})
