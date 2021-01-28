import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import RPanel from "./components/RPanel"
import Maint from "./components/Maint";


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

  //check login status
  componentDidMount(){
    {!localStorage.getItem('auth-token')? //if empty local storage
      // console.log('auth-token:empty'):
      // console.log('auth-token:not empty');
      this.setState({loggedIn: false}):
      this.setState({loggedIn: true})
    }
    //console.log("logged in", this.state.loggedIn);
    
    
  }
  
  //LOGIN USER
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
        .then((response) => {
          //check if error message
          if(!response.ok) throw new Error('wrong credentials, please try again!');
          else return response.json();
        })
        .then(result => {
            
            this.setState({token: result.token});
            this.setState({userID: result.user});
            this.setState({superUser: result.superUser})
            //console.log(result.superUser)//logs user ID
            localStorage.setItem('userID', result.user);
            localStorage.setItem('auth-token',result.token);//sets token on memory
  
            this.setState({
              loggedIn: !this.state.loggedIn, //redirects here!!!
              
            });
            console.log(this.state.loggedIn);
          
        })
        .catch((error) => {
            this.setState({ showLError: true});
            // alert(error);
            //console.log("Error", error);
          });
        
  }

  //REG NEW USER
  StatUpdate2 = () => {
    
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