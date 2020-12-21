import React from "react";
import App from "../App";
import TopOptions from "../components/TopOptions";



interface AppProps{
  // value: any,
  MyBuildings:any,
  // buildingsList?:any
  
}

interface DashBoardStates{
  // this.state
  on:any
}

class Dashboard extends React.Component<AppProps, DashBoardStates> {
  render(){
    return (
      <div className="mPanel">
        
          {/* {this.props.MyBuildings}     */}
          <TopOptions bldgsList={this.props.MyBuildings} />
        
      </div>
    );

  }
  
}

export default Dashboard;