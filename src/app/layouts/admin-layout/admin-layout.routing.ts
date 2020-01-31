import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { SigninComponent } from "../../pages/signin/signin.component";
import { PlanPartyComponent } from "../../pages/plan-party/plan-party.component";
import { AuthGuard } from "src/app/auth/auth.guard";
import { RegistrationComponent } from "src/app/pages/registration/registration.component";
import { DashboardDataResolverService } from "src/app/pages/dashboard/dashoboard-data-resolver";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    resolve: {
      partyCountAndExpense: DashboardDataResolverService
    }
  },
  {
    path: "icons",
    component: IconsComponent,
    canActivate: [AuthGuard]
  },
  // { path: "maps", component: MapComponent, canActivateChild: [AuthGuard] },
  {
    path: "notifications",
    component: NotificationsComponent,
    canActivate: [AuthGuard]
  },
  { path: "user", component: UserComponent, canActivate: [AuthGuard] },
  {
    path: "tables",
    component: TablesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "typography",
    component: TypographyComponent,
    canActivate: [AuthGuard]
  },
  { path: "signin",
  component: SigninComponent 
  },
  {
    path: "plan-party",
    component: PlanPartyComponent,
    canActivate: [AuthGuard]
  },
  { path: "regis", component: RegistrationComponent, canActivate: [AuthGuard] }
];
