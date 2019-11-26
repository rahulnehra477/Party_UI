import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PPchartComponent } from "./ppchart/ppchart.component";
import { PPchartService } from "./ppchart/ppchart.service";

@NgModule({
  declarations: [PPchartComponent],
  imports: [CommonModule],
  exports: [PPchartComponent],
  providers: [PPchartService]
})
export class PPChartModule {}
