import axios from 'axios'
import CONSTANTS from '../constants/index'

export const client = axios.create({
  baseURL: CONSTANTS.API.BASE,
  headers: {
    Accept: "application/json",
  },
  timeout: 30000
});