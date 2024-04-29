const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.set("view engine", "ejs")
app.set("views", "views")

const memes = [
    {
        name: "Memes that make us smile",
        imgURL: "https://exse.eyewated.com/pict/c38cc4d7ef9a30de-1024x683.jpg",
        price: "$20.00 - $30.00"
    },
    {
        name: "Programmer memes",
        imgURL: "https://aprogrammerlife.com/images/pictuers/programmers_looking_at_programming_memes.jpg",
        price: "$10.00"
    }
]

app.get("/", (req, res) => {
    res.render("index", {memes})
})

app.get("/add-meme", (req, res) => {
    res.render("add-meme")
})

// POST request handler for /memes endpoint
app.post("/memes", (req, res) => {
    // Extract meme data from request body
    const { name, price, imageURL } = req.body;
    // Create a new meme object
    const newMeme = {
        name: name,
        price: price,
        imgURL: imageURL
    };
    // Push the new meme to the memes array
    memes.push(newMeme);
    // Redirect the user back to the home page
    res.redirect("/");
});

app.listen(3000, () => console.log("Server running on port 3000"))

module.exports = app