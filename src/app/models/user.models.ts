export default interface IUser {
    email : string; 
    password: string;
    lastName : string; 
    firstName : string; 
    role? : 'admin' | 'user'; 
}