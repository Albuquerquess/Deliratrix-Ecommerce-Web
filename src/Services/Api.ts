import * as dotenv from "dotenv";
import axios from 'axios'

dotenv.config()

const Api = axios.create({
    baseURL: process.env.REACT_APP_WEB_API,
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      "Access-Control-Allow-Headers": "Authorization", 
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
      "Content-Type": "application/json;charset=UTF-8"      
      }
    }
    )

export default Api