// Creates a new XMLHttpRequest object, which can be used for HTTP requests with API's etc..

const request = new XMLHttpRequest();

// Fires a callback function every time the http request state changes
// States are from 1-4
// 4 means the request is completed and ready to be used

request.addEventListener("readystatechange",()=>{
    console.log(request.readyState)
})

// Sets the endpoint and type of request for the http request
// In this case we want to GET data and the endpoint we're getting it from it jsonplaceholder

request.open("GET","https://jsonplaceholder.typicode.com/todos")

// This sends the http request, activating it
request.send()