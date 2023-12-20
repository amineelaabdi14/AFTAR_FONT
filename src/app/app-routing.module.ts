import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitonsComponent } from './components/competitons/competitons.component';
import { UsersComponent } from './components/users/users/users.component';
import { HuntingComponent } from './components/hunting/hunting/hunting.component';

const routes: Routes = [
  { path:"competitions", component:CompetitonsComponent  },
  { path:"users", component:UsersComponent  },
  { path:"hunting", component:HuntingComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
