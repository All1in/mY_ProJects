const express = require("express")
const mongoose = require("mongoose")
const exphbs = require("express-handlebars")
const todoRoutes = require("./routes/todos")
const path = require("path")

const PORT = process.env.PORT || 3000
const DB_LINK = "mongodb+srv://userMomoto:userMomoto@cluster0.0ijjaw6.mongodb.net/todos"
const app = express()
const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
})

//  hbs

app.engine("hbs", hbs.engine)
app.set("view engine", "hbs")
app.set("views", "views")

app.use(todoRoutes)
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))


async function start() {
    try {
       await mongoose.connect(DB_LINK, {
        useNewUrlParser: true,
       }) 
       app.listen(PORT, () => {
        console.log("Server has been started...");
       })    
    } catch (error) {
        console.log(error);
    }
}

start()