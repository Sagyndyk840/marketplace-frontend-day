import axios from "axios";

let prod = 'https://sagyndyk.web-design.kz'

let api = axios.create({baseURL: `${prod}/api/`})

export {api}