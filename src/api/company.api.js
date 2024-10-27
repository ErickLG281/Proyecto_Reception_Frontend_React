import axios from 'axios'

const companyApi = axios.create({
    baseURL: 'http://localhost:8081/company'
})
export const getReceptions = (id) => companyApi.get(`/category/${id}`)

export const getCompany = (id) => companyApi.get(`/${id}`)

export const createCompany = (company) => companyApi.post('/create', company)

export const deleteCompany = (id) => companyApi.delete(`/delete/${id}`)

export const updateCompany = (id, company) => companyApi.put(`/update/${id}`, company)