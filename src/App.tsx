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
  email:string,
  password:string,
  confPassword:string
};


class App extends React.Component < {},LogStates> 
{

  constructor(props: any) {
    super(props);
    this.state = {
      loggedIn: false,  //true is in, false shows login
      token: '',
      email: '',
      password: '',
      confPassword: '',
    };
  }
  
  StatUpdate = () => {

      fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": "demo@email.com",
          "password": "123"
        })
      })
        // .then(res => res.json())
        .then(result => {
          console.log(result);
          console.log(localStorage.getItem('token'));
          // console.log(this.state.token);
          this.setState({
            loggedIn: !this.state.loggedIn,
            
          });
        })
        //THIS WORKS !!!
    // this.setState({
    //   loggedIn: !this.state.loggedIn
    // })
    
    // console.log('logging in')
  }

  // componentDidMount() {
    
  //   const baseUrl = 'http://localhost:3000/api/posts';
  //   // fetch(baseUrl, {
  //   //         method: 'POST',
  //   //         body: JSON.stringify({
  //   //           "email": "demo@email.com",
  //   //           "password": "123"
  //   //       }),
  //   //         //body: JSON.stringify({user: {username: email, password}}),
  //   //         headers: new Headers({
  //   //             'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRhOTk3Y2UzN2MxYTdmMjdjYmVmNWUiLCJpYXQiOjE2MDgxNjYzMTJ9.6UhiOPiPIuH4iIGg4aNGPyt7jcB7-t0EWe-Wa7rDvhI'
  //   //         })
  //   //     })

  //   fetch(baseUrl) 
  //     // .then((response) => (response.json())
  //     .then(res => res.text())          // convert to plain text
  //     .then(text => console.log(text))

  //     // .then((response) => (response.json())
      
  //     //   .then((responseData) => {
          
  //     //     console.log(responseData);
  //     //     //this.setState({ cards: responseData as CardData[] })
  //     //   })
  //       .catch((error) => {
  //         console.log("Error loading data", error);
  //       });

  // }
  
  render(){
    return (
      <div>
        {/* <Login />
        <Sidebar />
        <Dashboard MyBuildings={buildingsList}/> */}

        {
        !this.state.loggedIn ? 
        <Login 
        StatUpdate={this.StatUpdate}
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

      </div>
    );

  }
  
}


export default App;