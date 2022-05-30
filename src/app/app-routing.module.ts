import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component'
import { LoginComponent } from './components/auth/login/login.component'
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component'
import { OrdersComponent } from './components/orders/orders.component'
import { UsersComponent } from './components/users/users.component'
import { ProductsComponent } from './components/products/products.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component'
import { CategoriesComponent } from './components/categories/categories.component'


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "changepassword", component: ChangePasswordComponent },
  { path: "users", component: UsersComponent },
  { path: "orders", component: OrdersComponent },
  {
    path: "product", children: [
      { path: "", component: ProductsComponent },
      { path: "categories", component: CategoriesComponent }
    ],

  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
