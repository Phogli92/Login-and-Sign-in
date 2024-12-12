import axios from "axios";
    const request = async (url:string, method:string, data?: object|null) => {
        return await axios({
            method: method,
            url: `https://jsonplaceholder.typicode.com/${url}`,
            data: data
        })
    }
export default request;
