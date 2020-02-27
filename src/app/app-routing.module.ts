import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/barchart/chart.component';
import { DoughnutComponent } from './chart/doughnut-chart/doughnut.component';
import { LineChartDemoComponent } from './chart/line-chart-demo/line-chart-demo.component';
import { PieChartDemoComponent } from './chart/pie-chart-demo/pie-chart-demo.component';
import { PolarAreaChartComponent } from './chart/polar-area-chart/polar-area-chart.component';
import { RadarChartDemoComponent } from './chart/radar-chart-demo/radar-chart-demo.component';
import { TableComponent } from './component/table-demo/table-demo.component';
import { InputDemoComponent } from './component/input-demo/input-demo.component';
import { InputGroupComponent } from './component/input-group/input-group.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './component/panel/panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'table', component: TableComponent },
      {
        path: 'BarChart', component: ChartComponent
      },
      {
        path: 'doughnut', component: DoughnutComponent
      },
      {
        path: 'linechart', component: LineChartDemoComponent
      },
      {
        path: 'piechart', component: PieChartDemoComponent
      },
      {
        path: 'polarchart', component: PolarAreaChartComponent
      },
      {
        path: 'radar', component: RadarChartDemoComponent
      },
      {
        path: 'input', component: InputDemoComponent
      },
      {
        path: 'inputGroup', component: InputGroupComponent
      },
      {
        path: 'panel', component: PanelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
