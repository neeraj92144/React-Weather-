import axios from 'axios';

const OPEN_WEATHER_MAP = "http://samples.openweathermap.org/data/2.5/weather?appid=639b43bac021e0d2a07b92f9ffcd56c3";

// 639b43bac021e0d2a07b92f9ffcd56c3 q=London,uk&
// http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1

export function getWeather(location){

      return 'All is well';
      var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function (res){
        console.log(`res`,res);
        if(res.data.cod && res.data.message){
          throw new Error(res.data.mesage);
        }else{
          return res.data.main.temp;
        }
      }, function (res) {
        throw new Error(res.data.message)
      });
}
