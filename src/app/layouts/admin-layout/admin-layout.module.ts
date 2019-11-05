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


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from 'src/app/auth.service';
import { AuthLayoutModule } from '../auth-layout/auth-layout.module';
// import { PlanPartyComponent } from '../../pages/plan-party/plan-party.component';
// import { DashboardService } from 'src/app/pages/dashboard/dashboard.service';
// import { PlanPartyServices } from 'src/app/pages/plan-party/plan-party.services';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    AuthLayoutModule,
    
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
    // RtlComponent
  ],
  providers: [
    AuthService,
  ],
})
export class AdminLayoutModule {}
