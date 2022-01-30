import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { MaterialModule } from '../material.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BlogCardComponent } from './blog-card/blog-card.component';


@NgModule({
  declarations: [
    Component1Component,
    Component2Component,
    AdminDashboardComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
