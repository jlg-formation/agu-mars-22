import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  declarations: [StockComponent, AddComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    WidgetsModule,
  ],
})
export class StockModule {}
