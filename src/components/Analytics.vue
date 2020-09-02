<template>
  <div id="analytics"></div>
</template>
<script>
// import axios from "axios";
import {analyticsData} from "../data";
import ApexCharts from "apexcharts";
export default {
  name: "Analytics",
  created() {
    const vm = this;
    for (const [key, value] of Object.entries(analyticsData.data)) {
      if (vm.datacollection.series.length > 1) {
        vm.datacollection.series = vm.datacollection.series.map((el) => {
          const dataValues = Object.keys(value);
          console.log(dataValues);
          for (const data of dataValues) {
            console.log(data);
            if ((el.name = data)) {
              return {
                ...el,
                data: [...el.data, value[data]],
              };
            } else {
              return {
                name: data,
                data: [value[data]],
              };
            }
          }
        });
      } else {
        const dataValues = Object.keys(value);
        for (const data of dataValues) {
          const el = {
            name: data,
            data: [value[data]],
          };
          vm.datacollection.series.push(el);
        }
      }
      vm.datacollection.xaxis.categories.push(key);
    }
  },
  mounted() {
    var chart = new ApexCharts(
      document.querySelector("#analytics"),
      this.datacollection
    );

    chart.render();
  },
  data: function() {
    return {
      fetching: false,
      datacollection: {
        chart: {
          type: "line",
        },
        series: [],
        xaxis: {
          categories: [],
        },
      },
    };
  },
};
</script>
