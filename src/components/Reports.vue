<template>
  <div id="reports"></div>
</template>
<script>
import {reportData} from "../data";
import ApexCharts from "apexcharts";
export default {
  name: "Reports",
  created(){
      for (const [key, value] of Object.entries(reportData.lidar.memory)) {
          this.datacollection.series.push(value)
          this.datacollection.chartOptions.labels.push(key)
      }
    
  },
  mounted() {
    var chart = new ApexCharts(
      document.querySelector("#reports"),
      this.datacollection
    );

    chart.render();
  },
  data: function() {
    return {
      fetching: false,
      datacollection: {
        chart: {
          type: "donut",
        },
        series: [],
        chartOptions: {
            labels: []
        },
      },
    };
  },
/* 
    sockets not working properly getting an error 
*/
//   socket: {
//     events: {
//       changed(msg) {
//         console.log("Something changed: " + msg);
//       },
//     },
//   },
  
};
</script>
