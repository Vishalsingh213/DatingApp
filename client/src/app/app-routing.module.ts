import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '@dah-ui/core-services';

const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'auth',
    //     pathMatch: 'full'
    // },
    // {
    //     path: 'auth',
    //     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    // },
    // {
    //     path: 'admin',
    //     canActivate: [AuthGuard],
    //     data: { portalType: 'admin' },
    //     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    // },
    // {
    //     path: 'clinic',
    //     canActivate: [AuthGuard],
    //     data: { portalType: 'clinic' },
    //     loadChildren: () => import('./clinic/clinic.module').then(m => m.ClinicModule)
    // },
    // {
    //     path: 'lab',
    //     canActivate: [AuthGuard],
    //     data: { portalType: 'lab' },
    //     loadChildren: () => import('./lab/lab.module').then(m => m.LabModule)
    // },
    // {
    //     path: 'provider',
    //     canActivate: [AuthGuard],
    //     data: { portalType: 'provider' },
    //     loadChildren: () => import('./providers/providers.module').then(m => m.ProvidersModule)
    // },
    // {
    //     path: 'technician',
    //     canActivate: [AuthGuard],
    //     data: { portalType: 'technician' },
    //     loadChildren: () => import('./technician/technician.module').then(m => m.TechnicianModule)
    // },
    // {
    //     path: 'clinicneworder',
    //     loadChildren: () => import('./clinicneworder/clinicneworder.module').then(m => m.ClinicneworderModule)
    // },
    // {
    //     path: 'user-verification',
    //     loadChildren: () => import('./user-verification/user-verification.module').then(m => m.UserVerificationModule)
    // },
    // {
    //     path: '**',
    //     redirectTo: 'auth',
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
