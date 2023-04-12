export class User {
    name: string;
    email: string;
    password_digest: string;
    token: string;
    role: number;
    
    constructor(name: string, email: string, password_digest: string, role: number, token: string){
        this.name = name;
        this.email = email;
        this.password_digest = password_digest;
        this.role = role;
        this.token = token;
    }
}

export interface User {
    name: string;
    email: string;
    password_digest: string;
    role: number;
}