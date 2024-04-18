import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SettingComponent } from './components/setting/setting.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { RegisterUserComponent } from './components/RegisterUser/register-user/register-user.component';
import { authGuard } from './services/auth.guard';



export const routes: Routes = [
  
  {path:"", redirectTo:"login" , pathMatch:"full"},
  {path:"login", component: LoginComponent},
  {
    path: '',
    component: MainLayoutComponent,
    canActivate:[authGuard],
    children: [

      { path: 'home', component: HomeComponent, },

      { path: 'addproduct', component: AddproductComponent },
      { path: 'addadmin', component: AddAdminComponent },
      { path: 'edit-product/:product ', component: EditProductComponent },

      { path: 'setting', component: SettingComponent },
      { path: 'logout', component: LogoutComponent },


     
      
    ],
  },
 
  // { path: 'register', component: RegisterUserComponent },
  { path: '**', component: NotfoundComponent },
];


