import React from 'react';
// import apiConfig from './apiKeys';

class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = () => {
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?zip=94108&us&APPID=${'52136878ccc16d9cb8faf89b266167b4'}`
    console.log(weatherURL)
    fetch(weatherURL) 
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({
          fullData: data.list,
          dailyData: dailyData
        }, () => console.log(this.state), console.log(this.data))
      })
    }

    render() {
      return (
        <div>
          <h1>Hello World!</h1>
        </div>
      )
    }
  

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }
    // eslint-disable-next-line no-dupe-class-members
    render() {
      return (
        <div>
          {this.formatDayCards()}
        </div>  
        )
    }    
} 
export default WeekContainer