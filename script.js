// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()


// Open a new connection, using the GET request on the URL endpoint
request.open('GET','https://restcountries.eu/rest/v2/all',true) 
request.send();

request.onload = function() {
var data = JSON.parse(this.response)

for(var i in data){
    console.log("country name : ", data[i].name);
}
}