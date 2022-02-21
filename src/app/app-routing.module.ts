import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes : Routes = [
    {path:'', redirectTo:'/recipes',pathMatch: 'full'},
    {path:'shopping-list',component: ShoppingListComponent},
    {path: 'recipes', component: RecipesComponent, children:[
        {path:'', component: RecipeStartComponent},
        {path:'recipe-list',component: RecipeListComponent},
        {path:'new',component: RecipeEditComponent},
        {path:':id',component: RecipeDetailComponent},
        {path:':id/edit',component: RecipeEditComponent}
    ]}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class RoutingModule{

}