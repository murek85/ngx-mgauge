import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/getting-started/getting-started.module#GettingStartedModule'
    },
    {
        path: 'getting-started',
        loadChildren: 'app/getting-started/getting-started.module#GettingStartedModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
