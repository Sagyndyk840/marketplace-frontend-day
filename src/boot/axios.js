import axios from "axios";

const prod = 'https://sagyndyk.web-design.kz'

const api = axios.create({baseURL: `${prod}/api/`})

export { api }