//checks to make sure we have our token
import axios from "axios"

const axiosWithAuth = () => {
    //need to set user_token and our med_side token
    const token = localStorage.getItem('user_token');
    // return an instance of axios
    return axios.create({
        baseURL: "https://localhost:5000",
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth
