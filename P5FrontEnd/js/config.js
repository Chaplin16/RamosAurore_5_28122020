let config = {
    host:"http://localhost:3000/api/",
    api: "teddies"
}
//teddies
//furniture
//cameras


let apiUrl = ((config.host + config.api) === "localhost" || (config.host + config.api) === "127.0.0.1" )
? (config.host + config.api)
: "https://auroremyfirstonlinesite.herokuapp.com/"