
import api from './api'

export const getProducts = api('users', 'GET', )
export const addProduct = (product:object) => api( 'users', 'POST' , product)
