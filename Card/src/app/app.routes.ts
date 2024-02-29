import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ViewComponent } from './card/view/view.component';
import { SetPinComponent } from './card/set-pin/set-pin.component';

export const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'view', component: ViewComponent },
  { path: 'set-pin', component: SetPinComponent },
];
