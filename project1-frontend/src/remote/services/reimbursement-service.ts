import { authAppClient } from "../authenticated-app-client"


export const getReimbursement = async (id:any, user_id:any) => {
    return authAppClient.get(`reimbursements/${id}/${user_id}`)

}

export const getAllReimbursement = async (user_id:any) => {
    return authAppClient.get(`reimbursements/${user_id}`)

}

export const submitReimbursement = async (id:string, body:any) => {
    return authAppClient.post(`/reimbursements`,body)

}

export const deleteReimbursement = async (id:any, user_id:string) => {
    return authAppClient.delete(`/reimbursements/${id}/${user_id}`)
}

export const updateReimbursement = async (user_id:any, id:any, body:any) => {
    return authAppClient.patch(`/reimbursements/${user_id}/${id}`,body)
}