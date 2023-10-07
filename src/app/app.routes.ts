import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./components/componentes/home/home.component"
import { MessiComponent } from "./components/componentes/messi/messi.component"
import { JamesComponent } from "./components/componentes/james/james.component"
import { RonaldoComponent } from "./components/componentes/ronaldo/ronaldo.component"
const APP_ROUTES: Routes=[
    {path:'home',component:HomeComponent},
    {path:'james',component:JamesComponent},
    {path:'messi',component:MessiComponent},
    {path:'ronaldo',component:RonaldoComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);