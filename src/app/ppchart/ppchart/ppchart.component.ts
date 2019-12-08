import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
  ElementRef
} from "@angular/core";
import Chart from "chart.js";
import { PPchartService } from "./ppchart.service";
import { CHART_TYPE } from "src/app/pages/model/chartTypeEnum";

@Component({
  selector: "app-ppchart",
  templateUrl: "./ppchart.component.html",
  styleUrls: ["./ppchart.component.scss"]
})
export class PPchartComponent implements OnInit {
  @Input() XaxisLabel: string[];
  @Input() data: number[];
  @Input() color: string;
  @Input() type: CHART_TYPE;
  @Input() chartName: string;
  @Input() tooltipLabel: string;

  @ViewChild("chartHost", { static: false }) chartHost: ElementRef;

  eleRef: any;

  userDropdownSettings = {};
  public canvas: any;
  public ctx;
  public datasets: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  constructor(private chartService: PPchartService) {
    console.log("consructor called");
  }

  ngOnInit() {
    //this.setGraph();
  }

  ngAfterViewInit() {
    console.log();
    // this.chartHost.nativeElement.innerHTML;
    this.setGraph();
  }

  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }

  setGraph() {
    //var chart_labels =
    //this.data = [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100];
    const optionsConfig =
      this.type === "line"
        ? this.chartService.getLineChartOptionsConfig()
        : this.chartService.getBarchartOptionsConfig();

    //this.canvas = document.getElementById("chartBig1");
    this.canvas = this.chartHost.nativeElement;
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(233,32,16,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(233,32,16,0.0)");
    gradientStroke.addColorStop(0, "rgba(233,32,16,0)"); //red colors

    var config = {
      type: this.type,
      data: {
        labels: this.XaxisLabel,
        datasets: [
          {
            label: this.chartName,
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: this.color,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: this.color,
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: this.color,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.data
          }
        ]
      },
      options: optionsConfig
    };
    this.myChartData = new Chart(this.ctx, config);
    if (this.eleRef) {
      this.canvas = this.eleRef.nativeElement;
      this.ctx = this.canvas.getContext("2d");
      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    }
  }
}
