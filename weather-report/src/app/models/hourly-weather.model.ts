export interface HourlyWeather {
  cod: any;
  message: any;
  cnt: any;
  list: [{
    dt: any,
    main: {
      temp: any,
      temp_min: any,
      temp_max: any,
      pressure: any,
      sea_level: any,
      grnd_level: any,
      humidity: any,
      temp_kf: any
    },
    weather: [{
      id: any,
      main: string,
      description: string,
      icon: any
    }],
    clouds: {
      all: any
    },
    wind: {
      speed: any,
      deg: any
    },
    sys: {
      pod: any
    },
    dt_txt: any
  }];
}
