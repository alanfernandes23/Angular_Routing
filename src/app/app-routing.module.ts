import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { AuthGuard } from './user/auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
    [
      { path: 'welcome' , component: WelcomeComponent },
      { 
        path: 'products',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./products/product.module').then(featureModule => featureModule.ProductModule),
      },
      { path: '' , redirectTo: 'welcome' , pathMatch: 'full'},
      { path: '**' , component: PageNotFoundComponent },
    ],
    /* {
      enableTracing: true
    } */
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
