import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { SigninComponent } from '../../pages/signin/signin.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { IgxDatePickerModule } from "igniteui-angular";


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from 'src/app/auth.service';
import { AuthLayoutModule } from '../auth-layout/auth-layout.module';
import { PlanPartyComponent } from '../../pages/plan-party/plan-party.component';
import { DashboardService } from '../../pages/dashboard/dashboard.service';
import { PlanPartyServices } from '../../pages/plan-party/plan-party.services';
import { MatTableModule, MatDatepickerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    AuthLayoutModule,
    MatTableModule,
    MatDatepickerModule,
    IgxDatePickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SelectDropDownModule,
    NgMultiSelectDropDownModule.forRoot(),
    
  ],
  declarations: [
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    SigninComponent,
    DashboardComponent,
    PlanPartyComponent
    // RtlComponent
  ],
  providers: [
    AuthService,
    DashboardService,
    PlanPartyServices
  ],
})
export class AdminLayoutModule {}
