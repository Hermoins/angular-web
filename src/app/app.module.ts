import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { BrandComponent } from './home/brand/brand.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { NavCollapseComponent } from './home/navigation/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './home/navigation/nav-item/nav-item.component';
import { FooterComponent } from './home/footer/footer.component';
import { MatSidenavModule, MatRadioModule } from '@angular/material';
import { CustomizerComponent } from './home/customizer/customizer.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './component/table-demo/table-demo.component';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { ChartComponent } from './chart/barchart/chart.component';
import { DoughnutComponent } from './chart/doughnut-chart/doughnut.component';
import { LineChartDemoComponent } from './chart/line-chart-demo/line-chart-demo.component';
import { ToastModule } from 'primeng/toast';
import { PieChartDemoComponent } from './chart/pie-chart-demo/pie-chart-demo.component';
import { PolarAreaChartComponent } from './chart/polar-area-chart/polar-area-chart.component';
import { RadarChartDemoComponent } from './chart/radar-chart-demo/radar-chart-demo.component';
import { InputDemoComponent } from './component/input-demo/input-demo.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { MatRippleModule } from '@angular/material/core';
import { InputGroupComponent } from './component/input-group/input-group.component';
import { ThemesService } from './home/customizer/customizer.service';
import { LoginComponent } from './login/login.component';
import { inputDropDirective } from 'src/service/input.directive';
import { PanelComponent } from './component/panel/panel.component';
import {PanelModule} from 'primeng/panel';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FlexComponent } from './component/flex/flex.component';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BrandComponent,
    NavigationComponent,
    NavCollapseComponent,
    NavItemComponent,
    FooterComponent,
    CustomizerComponent,
    TableComponent,
    ChartComponent,
    DoughnutComponent,
    LineChartDemoComponent,
    PieChartDemoComponent,
    PolarAreaChartComponent,
    RadarChartDemoComponent,
    InputDemoComponent,
    InputGroupComponent,
    LoginComponent,
    inputDropDirective,
    PanelComponent,
    FlexComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatRadioModule,
    TableModule,
    ChartModule,
    ToastModule,
    InputTextModule,
    ButtonModule,
    MatRippleModule,
    PanelModule,
    RadioButtonModule,
    DropdownModule,
    ConfirmDialogModule,
  ],
  providers: [ThemesService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }