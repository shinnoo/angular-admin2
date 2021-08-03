import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  exports :[DashboardComponent],
})
export class AdminModule { }
