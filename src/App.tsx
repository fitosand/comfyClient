import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import RPanel from "./components/RPanel"


//fetch ALL here
let buildingsList: string[] = ["Bldg1", "Bldg2", "Bldg3"];
// let buildingsList: [{
//     name: string,
//     units: number,
//     maint: number 
// }];

// const buildingsList: LogProps = {
//     bldg: "Castilla",
//     units: 12,
//     maint: 3,
//     pmts: 4
// }

interface LogProps {
  // bldg: string,
  // units: number,
  // maint: number,
  // pmts: number,
  

};

interface LogStates {
  loggedIn:boolean,
  token: string,
  name:string
  email:string,
  password:string,
  confPassword:string,
  handleEmailChange: (e: any) => void;
  handlePassChange: (e: any) => void;
};


class App extends React.Component < {},LogStates> 
{

  constructor(props: any) {
    super(props);
    this.state = {
      loggedIn: false,  //true is in, false shows login
      token: '',
      name:'',
      email: '',
      password: '',
      confPassword: '',
      handleEmailChange: (e) => this.setState({ email: e }),
      handlePassChange: (e) => this.setState({ password: e }),
    };
  }
  
  StatUpdate = () => {

      fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": this.state.email,
          "password": this.state.password
        })
      })
        // .then(res => res.json())
        .then(result => {
          // console.log(this.state.password)
          // if(!result.ok){ throw result }
          // console.log(result);
          // console.log(localStorage.getItem('token'));
          // console.log(this.state.token);
          this.setState({
            loggedIn: !this.state.loggedIn, //redirects here!!!
            
          });
        })
        .catch((error) => {
            console.log("Error loading data", error);
          });
        
  }

  RegUser = () => {
    console.log('registering...');
    fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": this.state.email,
          "password": this.state.password
        })
      })
        // .then(res => res.json())
        .then(result => {
          //console.log(this.state.password)
          //if(!result.ok){ throw result }
          // console.log(result);
          // console.log(localStorage.getItem('token'));
          // console.log(this.state.token);
          window.confirm("User Created!") &&
          this.setState({
            loggedIn: !this.state.loggedIn, //redirects here!!!
            
          });
        })
        .catch((error) => {
            console.log("Error loading data", error);
          });

  }
  
  render(){
    return (
      <div>
        {/* <Login />
        <Sidebar />
        <Dashboard MyBuildings={buildingsList}/> */}

        {
        !this.state.loggedIn ? 
        <Login 
        handleEmailChange={this.state.handleEmailChange}
        handlePassChange={this.state.handlePassChange}
        StatUpdate={this.StatUpdate}
        RegUser={this.RegUser}
        email={this.state.email}
        password={this.state.password}
        confPassword={this.state.confPassword}
        
          
        /> :
        <div> 
          <Sidebar StatUpdate={this.StatUpdate} LogStatus={this.state.loggedIn} />
          {/* <Sidebar LogStatus={this.state.loggedIn} /> */}
          <Dashboard MyBuildings={buildingsList}/>
          <RPanel />
        </div>
        }
        <p>{this.state.email}</p>
        <p>{this.state.password}</p>

      </div>
    );

  }
  
}


export default App;