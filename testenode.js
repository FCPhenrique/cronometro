const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("s")
})
app.get("/teste/nome", function (req, res) {
    var canal = req.query["a"]
    res.send(canal)


})


app.listen(8080, function (erro) {
    if (erro) {
        console.log("Erro detectado")
    } else {
        console.log("tudo certo")
    }
})
