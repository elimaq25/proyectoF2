const express = require('express')
const routerProductos = require('./routers/productos')
const routerCarrito = require('./routers/carrito')

const app = express()
let acceso = true

app.use(express.urlencoded({extended: true}))
app.use(express.json())


if (acceso == true) {
    app.use('/api/productos', routerProductos)
    app.use('/api/carrito', routerCarrito)
} else {
    console.log('Sin acceso')
}



const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Servidor en ${PORT}`))
server.on('error', (error) => console.log(`Error en el servidor ${error}`))