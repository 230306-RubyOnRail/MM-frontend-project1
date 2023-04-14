import { authAppClient } from "../authenticated-app-client"


export const getReimbursement = async (id:number) => {
    return authAppClient.get('reimbursement/{$id}')

}

export const submitReimbursement = async (id:string, body: any) => {
    return authAppClient.post('/reimbursements',body)

}