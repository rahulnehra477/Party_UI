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

    //this.canvas = document.getElementById("CountryChart");
    console.log("OOOOOOO: ", this.eleRef);
    this.canvas = this.eleRef.nativeElement;
    this.ctx = this.canvas.getContext("2d");
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  }
}

//   var myChart = new Chart(this.ctx, {
//     type: "bar",
//     responsive: true,
//     legend: {
//       display: false
//     },
//     data: {
//       labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
//       datasets: [
//         {
//           label: "Total Expenses",
//           fill: true,
//           backgroundColor: gradientStroke,
//           hoverBackgroundColor: gradientStroke,
//           borderColor: "#1f8ef1",
//           borderWidth: 2,
//           borderDash: [],
//           borderDashOffset: 0.0,
//           data: [53, 20, 10, 80, 100, 45]
//         }
//       ]
//     },
//     options: this.chartService.getBarchartOptionsConfig()
//   });
// }

// setGraph() {
//   var gradientChartOptionsConfigurationWithTooltipRed: any = {
//     maintainAspectRatio: false,
//     legend: {
//       display: false
//     },

//     tooltips: {
//       backgroundColor: "#f5f5f5",
//       titleFontColor: "#333",
//       bodyFontColor: "#666",
//       bodySpacing: 4,
//       xPadding: 12,
//       mode: "nearest",
//       intersect: 0,
//       position: "nearest"
//     },
//     responsive: true,
//     scales: {
//       yAxes: [
//         {
//           barPercentage: 1.6,
//           gridLines: {
//             drawBorder: false,
//             color: "rgba(29,140,248,0.0)",
//             zeroLineColor: "transparent"
//           },
//           ticks: {
//             suggestedMin: 60,
//             suggestedMax: 125,
//             padding: 20,
//             fontColor: "#9a9a9a"
//           }
//         }
//       ],

//       xAxes: [
//         {
//           barPercentage: 1.6,
//           gridLines: {
//             drawBorder: false,
//             color: "rgba(233,32,16,0.1)",
//             zeroLineColor: "transparent"
//           },
//           ticks: {
//             padding: 20,
//             fontColor: "#9a9a9a"
//           }
//         }
//       ]
//     }
//   };

//   var gradientBarChartConfiguration: any = {
//     maintainAspectRatio: false,
//     legend: {
//       display: false
//     },

//     tooltips: {
//       backgroundColor: "#f5f5f5",
//       titleFontColor: "#333",
//       bodyFontColor: "#666",
//       bodySpacing: 4,
//       xPadding: 12,
//       mode: "nearest",
//       intersect: 0,
//       position: "nearest"
//     },
//     responsive: true,
//     scales: {
//       yAxes: [
//         {
//           gridLines: {
//             drawBorder: false,
//             color: "rgba(29,140,248,0.1)",
//             zeroLineColor: "transparent"
//           },
//           ticks: {
//             suggestedMin: 60,
//             suggestedMax: 120,
//             padding: 20,
//             fontColor: "#9e9e9e"
//           }
//         }
//       ],

//       xAxes: [
//         {
//           gridLines: {
//             drawBorder: false,
//             color: "rgba(29,140,248,0.1)",
//             zeroLineColor: "transparent"
//           },
//           ticks: {
//             padding: 20,
//             fontColor: "#9e9e9e"
//           }
//         }
//       ]
//     }
//   };

//   var chart_labels = [
//     "Jan",
//     "Feb",
//     "March",
//     "Apr",
//     "May",
//     "June",
//     "July",
//     "Aug",
//     "Sept",
//     "Oct",
//     "Nov",
//     "Dec"
//   ];

//   this.data = [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100];

//   this.canvas = document.getElementById("chartBig1");
//   this.ctx = this.canvas.getContext("2d");

//   var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

//   gradientStroke.addColorStop(1, "rgba(233,32,16,0.2)");
//   gradientStroke.addColorStop(0.4, "rgba(233,32,16,0.0)");
//   gradientStroke.addColorStop(0, "rgba(233,32,16,0)"); //red colors

//   var config = {
//     type: "line",
//     data: {
//       labels: chart_labels,
//       datasets: [
//         {
//           label: "Parties",
//           fill: true,
//           backgroundColor: gradientStroke,
//           borderColor: "#ec250d",
//           borderWidth: 2,
//           borderDash: [],
//           borderDashOffset: 0.0,
//           pointBackgroundColor: "#ec250d",
//           pointBorderColor: "rgba(255,255,255,0)",
//           pointHoverBackgroundColor: "#ec250d",
//           pointBorderWidth: 20,
//           pointHoverRadius: 4,
//           pointHoverBorderWidth: 15,
//           pointRadius: 4,
//           data: this.data
//         }
//       ]
//     },
//     options: gradientChartOptionsConfigurationWithTooltipRed
//   };
//   this.myChartData = new Chart(this.ctx, config);

//   this.canvas = document.getElementById("CountryChart");
//   this.ctx = this.canvas.getContext("2d");
//   var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

//   gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
//   gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
//   gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

//   var myChart = new Chart(this.ctx, {
//     type: "bar",
//     responsive: true,
//     legend: {
//       display: false
//     },
//     data: {
//       labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
//       datasets: [
//         {
//           label: "Total Expenses",
//           fill: true,
//           backgroundColor: gradientStroke,
//           hoverBackgroundColor: gradientStroke,
//           borderColor: "#1f8ef1",
//           borderWidth: 2,
//           borderDash: [],
//           borderDashOffset: 0.0,
//           data: [53, 20, 10, 80, 100, 45]
//         }
//       ]
//     },
//     options: gradientBarChartConfiguration
//   });
// }
