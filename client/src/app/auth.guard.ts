import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { LogoutService, StorageService } from '../services';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private route: Router,
        private storageService: StorageService,
        private logoutService: LogoutService,
    ) { }

    canActivate(
        activatedRouteSnapshot: ActivatedRouteSnapshot,
        routerStateSnapshot: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {

        const isTokenExpired = this.storageService.isTokenExpired();
        const portalType = activatedRouteSnapshot.data?.portalType;
        const user = this.storageService.getLoggedInUser();

        if (!isTokenExpired
            && user
            && user.portal_type
            && portalType
            && user.portal_type !== portalType) {
            this.logoutService.performLogout();
            this.route.navigate(['/auth/login']);
            return false;
        }

        if (!isTokenExpired)
            return true;

        this.logoutService.performLogout();
        this.route.navigate(['/auth/login']);
        return false;
    }
}