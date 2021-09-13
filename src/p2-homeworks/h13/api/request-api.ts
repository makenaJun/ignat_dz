import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})


export const authApi = {
    check: (body: BodyCheckRequest) => {
        return instance.post<ResponseDataType>('auth/test', body)
    }
}

export type BodyCheckRequest = {
    success: boolean
}

type ResponseDataType = {
    errorText: string
    info: string
    yourBody: BodyCheckRequest
    yourQuery: {}
}