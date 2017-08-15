import React from 'react';

var WeatherMessage = (props) =>{
      return(
          <div>
             Weather msg : -> {((props.Location) && (props.Temp))&&  `It is ${props.Temp} in ${props.Location}`}
          </div>
      )
}
export default WeatherMessage;
