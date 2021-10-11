import axios from "axios"
const instance = axios.create({
    baseURL:"https://hidden-retreat-76777.herokuapp.com"
})
export default instance;