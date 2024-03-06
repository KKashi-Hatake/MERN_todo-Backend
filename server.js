import dotenv from "dotenv";
import connectDB from "./src/DB/index.js";
import app from "./src/app.js";

dotenv.config({
  path: "./.env",
});

connectDB();
const port = process.env.PORT || 5000;


app.get('/',(req,res)=>{
  res.status(200).send("Hello from server")
})
console.log('here')
app.listen(port, (req, res) => {
  console.log("server is listening on: ", port);
});
