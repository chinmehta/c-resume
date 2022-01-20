import { IExistingUser } from '../core/iexisting-user.interface';
import { INewUser } from '../core/inew-user.interface';
import { AuthService } from '../infrastructure/api/auth.service';

export class AuthenticateUser {
  constructor(public authService: AuthService) {}

  async signup(userDetails: INewUser) {
    console.log(this.authService.getUserAuthStatus());
    await this.authService.signup(userDetails);
    // this.authService.createUser(userDetails);
    // this.emailAddress = this.password = '';
  }

  async login(userDetails: IExistingUser) {
    await this.authService.login(userDetails);
    console.log(this.authService.getUserAuthStatus());
    // this.emailAddress = this.password = '';
  }

  async logout() {
    console.log('User is successfully logged out.');
    await this.authService.logout();
  }
}
