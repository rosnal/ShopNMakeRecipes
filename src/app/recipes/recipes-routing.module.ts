import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeResolver } from "./recipes-resolver.service";
import { RecipesComponent } from "./recipes.component";

const routes : Routes = [
    {path: '', component: RecipesComponent, canActivate: [AuthGuard], children:[
        {path:'', component: RecipeStartComponent},
        {path:'recipe-list',component: RecipeListComponent},
        {path:'new',component: RecipeEditComponent},
        {path:':id',component: RecipeDetailComponent, resolve:[RecipeResolver]},
        {path:':id/edit',component: RecipeEditComponent,resolve:[RecipeResolver]}

    ]}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class RecipeRoutingModule{

}