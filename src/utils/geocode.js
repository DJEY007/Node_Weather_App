const request = require("request")

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZGhpcmFqamhhMDA3IiwiYSI6ImNrOHZzbzV5bTBsaDUzaG9rcm5rdjZ1YmsifQ.t_1Er3AKSQFGwbC49aLNag&limit=1';
    request({url, json : true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location Service!', undefined);    
        }else if(body.features.length === 0){
            callback('Unable to find the specified location. Please provide valid location!', undefined);
        }else{
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        } 
    } )
}

module.exports = geocode