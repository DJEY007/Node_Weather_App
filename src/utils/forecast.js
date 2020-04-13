const request = require("request")

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d7059b84fd8265b4209b6b3bfc035bd1&query='+ latitude + ',' + longitude;
    console.log(url)
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to cannect to weather service!', undefined);
        } else if(body.error){
            callback('No location found! please provide valid input!', undefined)
        } else {
            const data = body.current;
            callback(undefined, `It's ${data.temperature} degrees out there. it feels like ${data.feelslike} degrees. Weather forecast is ${data.weather_descriptions[0]}. Current wind speed is ${data.wind_speed} km/h and humidity is ${data.humidity}%.`)
        }
    })
} 

module.exports = forecast

