import axios from "axios";

let prod = 'https://market.it-hub.kz'

let api = axios.create({baseURL: `${prod}/api/`})

export {api}