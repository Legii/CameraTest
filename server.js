const express = require("express")
var fileupload = require("express-fileupload");

const path = require("path")
const fs = require("fs").promises

const app = express()
const PORT = 3000;


app.use(express.static('static'))
app.use(express.static('uploads'))
app.use(fileupload());

app.use(express.json());


const root = path.join(__dirname, "uploads")
const static = path.join(__dirname,"static")
const Path = (p) => {
    return path.join(root,p)
}








app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT )
})










app.post('/', function (req, res) {
   res.send("A")
   for (const [n, file] of Object.entries(req.files)) {
    fs.writeFile(`./uploads/${encodeURI(n)}.png`,file.data)
   }

});







app.get("/previewImage", async function (req, res) {
    const filepath = decodeURI(req.query.path)
    res.sendFile(Path(filepath))
   
})
