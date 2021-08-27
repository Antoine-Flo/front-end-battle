export interface User {
    id: string;
    email: string;
    username: string;
    challenges: {id: string, name: string}[];
}