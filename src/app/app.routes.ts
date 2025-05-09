import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LibraryComponent } from './pages/library/library.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { CourseComponent } from './pages/course/course.component';
import { CertificateComponent } from './pages/user/certificate/certificate.component';
import { AdminMenuComponent } from './pages/admin/admin-menu/admin-menu.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AnalysisComponent } from './pages/admin/analysis/analysis.component';
import { UserListComponent } from './pages/admin/user-list/user-list.component';

export const routes: Routes = [
  // open routes
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: CourseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  // user signin routes
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: 'user/certificate', component: CertificateComponent },
  // admin panel routes
  { path: 'admin/menu', component: AdminMenuComponent },
  { path: 'admin/analysis', component: AnalysisComponent },
  { path: 'admin/user-list', component: UserListComponent },
  // rediection routes
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
