export interface User {
    id?: number;
    name: string;
    email: string;
    password_digest: string;
    token: string;
    role: number;
    
}