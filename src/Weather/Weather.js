import React,{useState} from 'react'
import FeatchWeather from './FeatchWeather'
const Weather = () => {
    const [city,  setCity] = useState("")
    const  [weatherData,setWeatherData] =useState({})
    const [autoComp,setAutoComp] = useState([])
    const citys = ['lod','tokyo','tolibaba','neverland','lodar']
    async function  getTheWeather() {
        return  setWeatherData(await FeatchWeather(city).then((data)=> data)) 
    }
    
    function getTheCityName(e) {
      return  setCity(`${e.target.value}`)
    }
    function autoComplete(e) {
        let temp = citys.filter( city1 => city1.startsWith(e.target.value))
        console.log(temp);
        setAutoComp(temp)
    }
    return (
        <div>
            <input  onChange={getTheCityName,autoComplete} name="city" type="text" />
            <button onClick={getTheWeather}>click for weather</button>
            <div>
                {
                    autoComp.map(city=> <p>{city}</p>

                    )
                }
            </div>
        </div>
    )
}

export default Weather
