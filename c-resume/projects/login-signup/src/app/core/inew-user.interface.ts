import { IExistingUser } from "./iexisting-user.interface";

export interface INewUser extends IExistingUser {
    name?: string,
    phone? : number 
}
