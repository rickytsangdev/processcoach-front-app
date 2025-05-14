import { Routes } from '@angular/router';
// opening routes
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
// user routes
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { CourseComponent } from './pages/course/course.component';
import { CertificateComponent } from './pages/user/profile/certificate/certificate.component';
import { FaqComponent } from './pages/user/faq/faq.component';
// user children routes
import { InformationsComponent } from './pages/user/profile/informations/informations.component';
import { StatsComponent } from './pages/user/profile/stats/stats.component';
// admin routes
import { AnalysisComponent } from './pages/admin/analysis/analysis.component';
import { UserListComponent } from './pages/admin/user-list/user-list.component';
import { ManagementComponent } from './pages/admin/management/management.component';
import { adminGuard } from './guards/admin.guard';
// firebase auth guard
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
// redirection method
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['/']);

export const routes: Routes = [
  // open routes
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: CourseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },

  // user signin routes
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome },
  },
  {
    path: 'user/profile',
    component: ProfileComponent,
    children: [
      { path: '', component: InformationsComponent },
      { path: 'certificate', component: CertificateComponent },
      { path: 'stats', component: StatsComponent },
    ],
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome },
  },
  {
    path: 'user/profile/certificate',
    component: CertificateComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome },
  },

  // admin panel routes
  {
    path: 'admin/management',
    component: ManagementComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'admin/analysis',
    component: AnalysisComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'admin/user-list',
    component: UserListComponent,
    canActivate: [adminGuard],
  },

  // redirection routes
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
