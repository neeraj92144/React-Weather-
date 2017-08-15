import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
// import weatherMap from 'weatherMap';
const OPEN_WEATHER_MAP = "http://samples.openweathermap.org/data/2.5/weather?appid=639b43bac021e0d2a07b92f9ffcd56c3";
import axios from 'axios';
class Weather extends React.Component{
    constructor(props){
      super(props);
      this.state = { location : 'India', temp : '25' }
    }
    getWeather(location){
        // return 'All is well';
         var encodedLocation = encodeURIComponent(location);
         var requestUrl = `${OPEN_WEATHER_MAP}&q=${location}`;

         return axios.get(requestUrl).then(function (res){
           console.log(`res`,res);
           if(res.data.cod && res.data.message){
             throw new Error(res.data.mesage);
           }else{
             return res.data.main.temp;
           }
         }, function (res) {
          // throw new Error(res.data.message)
          return res;
         });

        // return axios.get(requestUrl).then(res=>{
        //   console.log(res);
        //   debugger;
        // })


   }

    handleSearch(location){
      var that = this;
      var anoot= (app) =>{
        alert(`hI ${app}`);
      }
      anoot('neeraj');

      var add = (a,b) =>{
        return a+b;
      }
      console.log(add(1,2));
      var addd= (a,b) => a+b
      console.log(addd(1,3));



      this.getWeather(location).then(temp =>{
        console.log('temp-->', temp);
        that.setState({ location : location, temp : temp });
      })
    }
    render(){
        const {location, temp} = this.state;
        return(
            <div>
                Weather COmponent
                <WeatherForm onSearch={check =>this.handleSearch(check)}/>
                <WeatherMessage Location={location} Temp= {temp} />
            </div>
        )
    }
}
export default Weather;
