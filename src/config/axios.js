import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'https://my-json-server.typicode.com/beatrizAdalab/productos'
})

export default clienteAxios;