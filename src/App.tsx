import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import RPanel from "./components/RPanel"
import Maint from "./components/Maint";

import APIURL from "./helpers/environment";


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
  userID:string,
  bInfo:string,
  UnitInfo:string,
  superUser:boolean,
  name:string,
  email:string,
  password:string,
  confPassword:string,
  handleEmailChange: (e: any) => void;
  handlePassChange: (e: any) => void;
  showLError:boolean,
  showRError:boolean,
};


class App extends React.Component < {},LogStates> 
{

  constructor(props: any) {
    super(props);
    this.state = {
      loggedIn: false,  //true is in, false shows login
      token: '',
      userID:'',
      superUser:false,
      bInfo:'',
      UnitInfo:'',
      name:'',
      email: '',
      password: '',
      confPassword: '',
      handleEmailChange: (e) => this.setState({ email: e }),
      handlePassChange: (e) => this.setState({ password: e }),
      showLError:false,
      showRError:false
    };
  }

  //check login status & resident or admin
  componentDidMount(){
    {!localStorage.getItem('auth-token')? //if empty local storage
      
      this.setState({loggedIn: false}):
      
        localStorage.getItem('superUser') === 'true'? //if superUser = true
        this.setState({superUser: true}):
        this.setState({superUser: false})
        this.setState({bInfo: this.state.bInfo});
        console.log(this.state.bInfo) //prints nothing right now!
        this.setState({UnitInfo: this.state.UnitInfo});

      }
      this.setState({loggedIn: true})
    
  }
  
  //LOGIN USER
  StatUpdate = () => {

    fetch(`${APIURL}/api/user/login`, {
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
        .then((response) => {
          //check if error message
          if(!response.ok) throw new Error('wrong credentials, please try again!');
          else return response.json();
        })
        .then(result => {
            
            this.setState({token: result.token});
            this.setState({userID: result.user});
            this.setState({superUser: result.superUser});
            this.setState({bInfo: result.bInfo});
            this.setState({UnitInfo: result.UnitInfo});
            console.log("this",result.BlgdInfo);
            //console.log(result.superUser)//logs user ID
            localStorage.setItem('userID', result.user);
            localStorage.setItem('superUser', result.superUser);
            localStorage.setItem('auth-token',result.token);//sets token on memory
  
            this.setState({
              loggedIn: !this.state.loggedIn, //redirects here!!!
              
            });
            console.log("loggedin:" , this.state.loggedIn);
          
        })
        .catch((error) => {
            this.setState({ showLError: true});
            // alert(error);
            //console.log("Error", error);
          });
        
  }

  //REG NEW USER
  StatUpdate2 = () => {
    
    fetch(`${APIURL}/api/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": this.state.email,
          "password": this.state.password,
          "building": 'Tivoli',
          "unit": '5'
        })
      })
        // .then(res => res.json())
        .then((response) => {
          //check if error message
          if(!response.ok) return response.status;
          else return response.json();
        })
        .then(result => {
          console.log('registering...');
          this.setState({token: result.token});
          this.setState({userID: result.user._id});
          console.log(result.user._id)//logs user ID
          localStorage.setItem('userID', result.user);
          localStorage.setItem('auth-token',result.token);//sets token on memory
          localStorage.setItem('superUser', result.superUser);
          
          // if(!result.ok){ throw result }
          
          window.confirm("User Created!") &&
          this.setState({
            loggedIn: !this.state.loggedIn, //redirects here!!!
            
          });
        })
        .catch((error) => {
          this.setState({ showRError: true});
            console.log("Email already exists", error);
          });

  }

  //LOGOUT USER
  StatUpdate3 = () => {
        console.log('logged out!');
      this.setState({
        // loggedIn: !this.state.loggedIn, //redirects here!!!
        loggedIn: false
      });
      console.log(this.state.loggedIn)
      localStorage.clear();
      
}

  
  render(){
    return (
      <div className="mainApp">
        {/* <Login />
        <Sidebar />
        <Dashboard MyBuildings={buildingsList}/> */}

        {
        
        !localStorage.getItem('auth-token') //if local storage empty
        //!this.state.loggedIn //if loggedIn is false
        ? 
        
        <Login 
        handleEmailChange={this.state.handleEmailChange}
        handlePassChange={this.state.handlePassChange}
        StatUpdate={this.StatUpdate}
        StatUpdate2={this.StatUpdate2}
        
        email={this.state.email}
        password={this.state.password}
        confPassword={this.state.confPassword}
        loggedIn={this.state.loggedIn}
        showLError={this.state.showLError}
        showRError={this.state.showRError}
        
          
        /> :
        <div> 
          <Sidebar 
          StatUpdate={this.StatUpdate} 
          StatUpdate3={this.StatUpdate3} 
          LogStatus={this.state.loggedIn}
          bInfo= {this.state.bInfo}
          UnitInfo={this.state.UnitInfo}
          superUser={this.state.superUser}

          />
          {/* <Sidebar LogStatus={this.state.loggedIn} /> */}
          <Dashboard 
          superUser={this.state.superUser}
          userID={this.state.userID} 
          MyBuildings={buildingsList}
          />
          {/* <RPanel /> */}
          
        </div>
        }
        {/* <p>{this.state.email}</p>
        <p>{this.state.password}</p> */}

      </div>
    );

  }
  
}


export default App;