import api from './api'

export const getProducts = async()=>{
    const response = await api('users', 'GET')
    sessionStorage.setItem("data", JSON.stringify(response.data))
}

export const addProduct = (product:object) => api( 'users', 'POST' , product)
