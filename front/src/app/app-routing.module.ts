import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: LegalComponent,
    path: 'legal',
  },
  { path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
