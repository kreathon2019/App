import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'menu', redirectTo: 'login', pathMatch: 'full' }, // Eventuell nicht nötig
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'group', loadChildren: './pages/group/group.module#GroupPageModule' },  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
