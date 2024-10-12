import express from "express";
import userRoute from "./router/user"
const app = express()

app.use(express.json())
app.use("/api", userRoute)

export default app