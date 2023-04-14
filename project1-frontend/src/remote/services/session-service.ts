import { appClient } from "../app-client"

export const authenticate = async (credentials: {email: string, password_digest: string}) => {
    return await appClient.post('/auth/login', credentials);
}

export const createUser = async (user_id:any, body:any) => {
    return appClient.post(`/users/${user_id}`,body)
}