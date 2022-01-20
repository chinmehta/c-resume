import { IExistingUser } from "../../core/iexisting-user.interface";
import { INewUser } from "../../core/inew-user.interface";

export interface AuthRepository {
    // signup(): Promise<INewUser>;
    signup(userDetails: INewUser): Promise<void>;
    login(userDetails: IExistingUser): Promise<void>;
    logout(): Promise<void>;
    getUserAuthStatus(): any;
}
