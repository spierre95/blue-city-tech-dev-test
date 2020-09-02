// 500 error from api, this is the data used in the screenshot

export const analyticsData = {
  data: {
    "2020-06-30 0:0": {
      ns: 72,
      nr1: 16,
      nlr: 16,
    },
    "2020-06-30 0:15": { ns: 78, nr1: 20, nlr: 15 },
    "2020-06-30 0:30": { ns: 68, nlr: 15, nr1: 15 },
  },
};

//unable to connect ot the websocket, sample data from the screen shot

export const reportData = {
  sensor: {
    uuid: "test",
    motor_rpm: 66,
    output: 3.2,
  },
  lidar: {
    memory: {
      total: 16384,
      available: 13265,
    },
    cpu: { 1: 49, 2: 4 },
  },
};
