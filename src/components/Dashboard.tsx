import React from "react";
import App from "../App";
import TopOptions from "../components/TopOptions";
import RPanel from "../components/RPanel"



interface AppProps{
  // value: any,
  MyBuildings:any,
  userID:string,
  superUser:boolean,
  // buildingsList?:any
  
}

interface DashBoardStates{
  // this.state
  on:any
}

class Dashboard extends React.Component<AppProps, DashBoardStates> {
  render(){
    return (
      <div className="main-cards">
        
          {/* {this.props.MyBuildings}     */}
          <div className="mPanel">
            <TopOptions superUser={this.props.superUser} userID={this.props.userID} 
          bldgsList={this.props.MyBuildings} />
          </div>
          <div className="rPanel">
            <RPanel />

          </div>
          
        
      </div>
    );

  }
  
}

export default Dashboard;