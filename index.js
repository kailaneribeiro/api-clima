const axios = require ("axios")
const express = require ("express")
const app = express()

app.use(express.json())
const API_KEYS = require ("./keys")
const port = 3000

app.get("/clima/:cidade", async(req, res) => {
    try {
        const cidade = req.params.cidade
        let response = await axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEYS}&units=metric`)
        let clima = response.data
        res.status(200).json(clima)
    } catch (error){
        res.status(500).json({error:"Erro ao buscar dodos climaticos"})
    } 
})

app.listen (port, ()=> {
    console.log(`Servidor rodando na porta ${port}`)
    })
