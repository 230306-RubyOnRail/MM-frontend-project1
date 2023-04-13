export class Reimbursement {
    id: number;
    description: string;
    status: string;
    amount: number;
    user_id: number;

    constructor(id: number, description: string, status: string, amount: number, user_id: number){
        this.id = id;
        this.description = description;
        this.status = status;
        this.amount = amount;
        this.user_id = user_id;
    }
}


export interface Reimbursement{
    id: number;
    description: string;
    type: string;
    amount: number;
    status:string;
}
