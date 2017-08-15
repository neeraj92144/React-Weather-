import React from 'react';

class WeatherForm extends React.Component{
    onFormSubmit(e){
      e.preventDefault();
      var location= this.refs.location.value;
      if(location){
        //this.refs.location.value='';
        this.props.onSearch(location);
      }
    }
    render(){
        return(
            <div>
                <center><h1>Get Weather</h1>
                  <form onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="input" ref="location" placeholder="Enter City Name" />
                    <input type="submit" value="Get Weather" />
                  </form>
                </center>
           </div>
        )
    }
}
export default WeatherForm;
