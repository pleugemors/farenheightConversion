//break temperatures into different cities/temp pairs
var temperatures = "Albany|22.2*Caribou|9.5*Columbia|44.6*Denver|29.2*Indianapolis|26.5*Montgomery|46.6*San Diego|57.8*Tulsa|36.4*Tampa|61.3*Billings|24.0"
var split = temperatures.split('*')
var formula= '(32°F − 32) × 5/9'
var cold = []
var moderate = []
var hot = []
function farenheight(city, index){
  
}
//break pairs up to cities temp
console.log(split)
for (var city in split){
  //break cities and temps up
  var cityPair = split[city].split('|')
  //convert to celsius
  var farenConversion = cityPair[1]-32.0
  farenConversion *= 5.0/9
  cityPair[1]= farenConversion
  //seperate to cold, moderate, hot
  if(farenConversion < 20){
    cold.push(cityPair.join(' '))
  }else if(farenConversion < 30){
    moderate.push(cityPair.join(' '))
  }else {
    hot.push(cityPair.join(' '))
  }
  
  
  
}
//print cold
console.log("cold")
for(var item in cold){
    console.log(cold[item])
}
//print moderate
console.log("moderate")
for(var item in moderate){
    console.log(moderate[item])
}
//print hot
console.log("hot")
for(var item in hot){
    console.log(hot[item])
}