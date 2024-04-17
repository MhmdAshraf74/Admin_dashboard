import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import * as Highcharts from 'highcharts';


import { AddproductComponent } from '../addproduct/addproduct.component';

import { Chart, ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink,HighchartsChartModule, ChartModule, AddproductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
   
  }

  
  // private CreatLineChart() : void{
  //   const chart = Highcharts.chart('chart-line',{
     
  //   })
  // }
 
lineChart = new Chart({
  accessibility: {
    enabled: false,
  },
  chart: {
    type: 'line',
  },
  title: {
    text: 'Sales For The Year',
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {},
  credits: {
    enabled: true,
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: false,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: 'This Year',
      data: [
        10500, 50700, 40900, 15400, 35450, 10920, 18750, 21540, 20780, 78052,
        48200, 49213,
      ],
    } as any,
    {
      name: 'Last Year',
      data: [
        7400, 26300, 33450, 10630, 17120, 6800, 7500, 14230, 15036, 50780,
        30860, 25406,
      ],
    },
  ],
 
});


  pieChart1 = new Chart({
    chart: {
      type: 'pie',
    },
    title:{
      text: ''
    
    },
    series: [
      {
        name: 'Percentage',
        colorByPoint: true,
        data: [
          {
            name: 'Pending',
            y: 25.03,
          },
          {
            name: 'Canceled',
            y: 34.2,
          },
          {
            name: 'Delivered',
            y: 45,
          },
        ],
      } as any,
    ],
    });

  // pieChart = new Chart({
  //   chart: {
  //     type: 'pie',
  //     plotShadow: false,
  //   },
  //   title: {
  //     verticalAlign: 'middle',
  //     floating: true,
  //     text: 'Products',
  //   },
  //   credits: {
  //     enabled: false,
  //   },
  //   plotOptions: {
  //     pie: {
  //       innerSize: '99%',
  //       borderWidth: 10,
  //       borderColor: '',
  //       slicedOffset: 10,
  //       dataLabels: {
  //         connectorWidth: 0,
  //       },
  //     },
  //   },
  //   legend: {
  //     enabled: false,
  //   },
  //   series: [
  //     {
  //       type: 'pie',
  //       data: [
  //         { name: 'Iphone 15', y: 1, color: '#eeeeee' },

  //         { name: 'samsung', y: 2, color: '#393e46' },

  //         { name: 'labtop', y: 3, color: '#00adb5' },
  //         { name: 'clothes', y: 4, color: '#eeeeee' },
  //         { name: 'shoes', y: 5, color: '#506ef9' },
  //       ],
  //     },
  //   ],
  // });
}
