export class User {
    name: string;
    email: string;
    password_digest: string;
    role: number;
    
    constructor(name: string, email: string, password_digest: string, role: number){
        this.name = name;
        this.email = email;
        this.password_digest = password_digest;
        this.role = role;
    }
}

export interface User {
    name: string;
    email: string;
    password_digest: string;
    role: number;
}