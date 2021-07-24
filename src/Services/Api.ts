import * as dotenv from "dotenv";
import axios from 'axios'

dotenv.config()

const Api = axios.create({baseURL: process.env.REACT_APP_WEB_API})

export default Api