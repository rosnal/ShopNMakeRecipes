import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeResolver } from "./recipes/recipes-resolver.service";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes : Routes = [
    {path:'', redirectTo:'/auth',pathMatch: 'full'},
    {path:'shopping-list',component: ShoppingListComponent},
    {path: 'recipes', component: RecipesComponent, children:[
        {path:'', component: RecipeStartComponent},
        {path:'recipe-list',component: RecipeListComponent},
        {path:'new',component: RecipeEditComponent},
        {path:':id',component: RecipeDetailComponent, resolve:[RecipeResolver]},
        {path:':id/edit',component: RecipeEditComponent,resolve:[RecipeResolver]}

    ], canActivate: [AuthGuard]},
    {path:'auth',component: AuthComponent}

]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class RoutingModule{

}