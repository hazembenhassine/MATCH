import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Business} from '../../models/Business';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

const credentialsKey = 'connectedAdmin';

@Injectable()
export class AuthService {

  // tslint:disable-next-line:variable-name
  private _credentials: Business | null;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
      if (savedCredentials) {
        this._credentials = JSON.parse(savedCredentials);
      }
    }
  }

  /**
   * Gets the user credentials.
   * @return {Credentials} The user credentials or null if the user is not authenticated.
   */
  get credentials(): Business | null {
    return this._credentials;
  }


  public isLoggedIn(): any {
    if (isPlatformBrowser(this.platformId)) {
      let YOUCANPASS = false;
      if (localStorage.getItem('token') != null) {
        YOUCANPASS = true;
      }
      return (YOUCANPASS);
    }
  }


  /**
   * Logs out the user and clear credentials.
   * @return {Observable<boolean>} True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.setCredentials();
    return of(true);
  }

  /**
   * Checks is the user is authenticated.
   * @return {boolean} True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param {Credentials=} credentials The user credentials.
   * @param {boolean=} remember? True to remember credentials across sessions.
   */
  public setCredentials(credentials?: any, remember?: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      this._credentials = credentials || null;

      if (credentials) {
        const storage = remember ? localStorage : sessionStorage;
        storage.setItem(credentialsKey, JSON.stringify(credentials));
      } else {
        sessionStorage.removeItem(credentialsKey);
        localStorage.removeItem(credentialsKey);
      }
    }
  }

}
