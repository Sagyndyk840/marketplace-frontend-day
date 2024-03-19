import axios from "axios";

const prod = 'https://market.it-hub.kz'

const api = axios.create({baseURL: `${prod}/api/`})

export { api }