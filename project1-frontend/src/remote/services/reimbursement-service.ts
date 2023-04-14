import { authAppClient } from "../authenticated-app-client"


export const getReimbursement = async (id:string) => {
    return authAppClient.get('reimbursement/{$id}')

}

export const submitReimbursement = async (id:string, body: any) => {
    return authAppClient.post('/reimbursements',body)

}

export const deleteReimbursement = async (id:string) => {
    return authAppClient.delete('reimbursement/{$id}')
}