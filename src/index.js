import app from "./app.js";
import { connectDB } from "./db.js";
app.listen(4000)
connectDB()
console.log('on port 4000');