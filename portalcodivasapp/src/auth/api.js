import axios from 'axios'

 
 const api = axios.create({
    baseURL: 'https://logf01.herokuapp.com/',
  //  autorizate: ,
})

export default api