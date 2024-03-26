import axios from "axios";


//How to make API calls
//1. Create an Axios instance
//2. Use the Axios instance to make API calls: 

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2854d8e0c0a74d9aa12ceb7ae8213b39'
    }
})