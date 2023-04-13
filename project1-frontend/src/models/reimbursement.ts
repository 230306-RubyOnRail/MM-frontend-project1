export class Reimbursement {
    description: string;
    status: string;
    amount: number;
    user_id: number;

    constructor(description: string, status: string, amount: number, user_id: number){
        this.description = description;
        this.status = status;
        this.amount = amount;
        this.user_id = user_id;
    }
}

export interface Reimbursement {
    description: string;
    status: string;
    amount: number;
    user_id: number;
}