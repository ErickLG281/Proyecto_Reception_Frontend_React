import axios from 'axios'

const userApi = axios.create({
    baseURL: 'https://whole-phones-march.loca.lt/user'
})

    export const isAuthenticated = (user) => userApi.post('/login', user)

// export const deleteCompany = (id) => userApi.delete(`/delete/${id}`)

// export const updateCompany = (id, task) => userApi.put(`/update/${id}`, task)