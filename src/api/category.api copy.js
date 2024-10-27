import axios from 'axios'

const categoryApi = axios.create({
    baseURL: 'http://localhost:8081/category'
})
export const searchCategories = () => categoryApi.get('/get')