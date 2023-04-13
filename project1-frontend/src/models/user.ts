export class User {
    id?: number;
    name: string;
    email: string;
    password_digest: string;
    token: string;
    role: number;
    
    constructor(id: number, name: string, email: string, password_digest: string, role: number, token: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password_digest = password_digest;
        this.role = role;
        this.token = token;
    }
}

export interface User {
    id?: number;
    name: string;
    email: string;
    password_digest: string;
    role: number;
    
}