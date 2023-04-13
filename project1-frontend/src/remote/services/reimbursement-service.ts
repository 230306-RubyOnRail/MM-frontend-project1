import { authAppClient } from "../authenticated-app-client"


export const getReimbursement = async (id:number) => {
    return authAppClient.get('reimbursement/{$id}')

}