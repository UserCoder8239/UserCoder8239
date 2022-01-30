import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

const routes: Routes = [
	{
		path: "",
		component: AdminDashboardComponent,
		children: [
			{ path: "", component: Component1Component },
			{ path: "first-component", component: Component1Component },
			{ path: "second-component", component: Component2Component },
			{ path: "admin/**", component: PageNotFoundComponent }
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
