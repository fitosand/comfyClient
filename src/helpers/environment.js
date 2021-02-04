let APIRUL = ''

switch (window.location.hostname) {
  //localhost of react app
  case "localhost": 
  case "127.0.0.1":
    //localhost name of api
    APIURL = 'http://localhost:3000'
    break
  case 'mycomfy.herokuapp.com': 
    APIURL = "https://fast-taiga-38803.herokuapp.com/";
}

export default APIURL;
