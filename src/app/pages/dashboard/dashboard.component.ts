import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { User } from "../model/User";
import { CHART_TYPE } from "../model/chartTypeEnum";
import { Router, ActivatedRoute } from "@angular/router";
import { DashboardService } from "./dashboard.service";
import { UserService } from 'src/app/user.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  userList: User[];
  userDropdownSettings = {};
  public canvas: any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  partyCountList: any;
  expenseCountList: any;

  lineChart: any;
  pieChart: any;
  selectEvent: string = "Event Type";
  placeOptions: string[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) {
    console.log("consructor called");
  }

  onOptionChange(aa: any) {
    this.setDataForLineChart(aa && aa.value);
    this.setDataForPieChart(aa && aa.value);
  }

  ngOnInit() {
    this.route.data.subscribe((response: any) => {
      this.partyCountList = response.partyCountAndExpense[0];
      this.expenseCountList = response.partyCountAndExpense[1];
      this.placeOptions = Object.keys(this.partyCountList);
    });

    this.userService.getUserList().subscribe((response: User[]) => {
      this.userList = response;
    });

    this.lineChart = {
      XaxisLabel: this.dashboardService.getMonths(),
      data: [],
      color: "#ff0000",
      type: CHART_TYPE.LINE,
      chartName: "Parties",
      tooltipLabel: "Total Parties"
    };

    this.pieChart = {
      XaxisLabel: this.dashboardService.getMonths(),
      data: [],
      color: "#0000ff",
      type: CHART_TYPE.LINE,
      chartName: "Expenses",
      tooltipLabel: "Total Expenses"
    };

    this.setDataForLineChart("ALL");
    this.setDataForPieChart("ALL");
  }

  setDataForLineChart(place: string) {
    place = place ? place : "ALL";
    let dataArray: any[];
    dataArray = this.getDataArrayForChart(this.partyCountList[place]);
    this.lineChart.data = [...dataArray];
  }

  setDataForPieChart(place: string) {
    place = place ? place : "ALL";
    let dataArray: any[];
    dataArray = this.getDataArrayForChart(this.expenseCountList[place]);
    this.pieChart.data = [...dataArray];
  }

  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }

  getDataArrayForChart(dataObj) {
    const dataInMonthOrder = [];
    const keys = Object.keys(dataObj);
    const monthArr = this.dashboardService.getMonths();

    monthArr.forEach((ele, key) => {
      let isKeyFound = false;
      keys.forEach((dataEle, dataV) => {
        if (dataObj && dataEle.indexOf(ele) > -1) {
          dataInMonthOrder.push(dataObj[dataEle]);
          isKeyFound = true;
        }
      });

      if (!isKeyFound) {
        dataInMonthOrder.push(0);
      }
    });

    return dataInMonthOrder;
  }

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
}
