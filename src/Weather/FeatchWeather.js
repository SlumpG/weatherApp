

const FeatchWeather =  async(city) => {
   return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e16e727dfd48673322bcfeedea44aa5c`)
   .then((res)=> res.json())
   .then(data => data)
}

export default FeatchWeather
