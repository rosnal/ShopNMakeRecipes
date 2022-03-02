import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/place-holder.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    UnlessDirective,
    DropdownDirective,
    PlaceholderDirective,
    LoadingSpinnerComponent,
    AlertComponent,
  ],
  imports: [CommonModule],
  exports: [
    HighlightDirective,
    UnlessDirective,
    DropdownDirective,
    PlaceholderDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    CommonModule
  ],
})
export class SharedModule {}
