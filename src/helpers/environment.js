let APIRUL = "";

switch (window.location.hostname) {
  //localhost of react app
  case "localhost" || "127.0.0.1":
    //localhost name of api
    APIURL = "http://localhost:3000";
    break;
  //deployed react app
  case "mycomfy.herokuapp.com": //client app
    //server app
    APIRUL = "https://fast-taiga-38803.herokuapp.com/";
}

export default APIRUL;
