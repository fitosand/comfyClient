import React, { useState } from "react";
import Buildings from './Buildings';
import Maint from './Maint';
import Subs from './Subs';
import Reserve from './Calendar';
import '../Calendar.css'

interface AppProps2{
  // value: any,
  bldgsList:string[]
  userID:string,
  superUser:boolean,
  
}

type StateVars = {
  showB:boolean,
  showM:boolean,
  showS:boolean,
  showR:boolean
}


class TopOptions extends React.Component <AppProps2, StateVars>
{
  constructor(props: AppProps2) {
    super(props);
    this.state = {
      showB: false,
      showM:false,
      showS:false,
      showR:false
    };
    // console.log(this.state.showB);
  }

  render(){

    return (
      <div className="CategoryBoard">
        <div className="Squares">
          {this.props.superUser? //if admin
          <button
            value="1"
            className="CenterSquare"
            
            onClick={(e) => 
              this.setState({ showB:true },
                () => {
                  this.setState({
                    showM:false,
                    showS:false
                  });
                }
             )} 
            >  
               Buildings
          </button>
          :
          ''
          }
          <button
            disabled={false}
            value="1"
            className="CenterSquare"
            onClick={(e) => 
              this.setState({ showS:true },
                () => {
                  this.setState({
                    showM:false,
                    showB:false
                  });
                }
             )} 
            >  
               Subscriptions
          </button>
          <button
            value="1"
            className="CenterSquare"
            onClick={() => 
              this.setState({ showM:true },
                () => {
                  this.setState({
                    showB:false,
                    showS:false
                  });
                }
             )} 
            // onClick={() => alert('tits')}
            >  
               Maintenance
          </button>
          <button
            disabled={false}
            value="1"
            className="CenterSquare"
            onClick={(e) => 
              this.setState({ showR:true },
                () => {
                  this.setState({
                    showM:false,
                    showS:false,
                    showB:false
                  });
                }
             )} 
            >  
               Reservations
          </button>
          {/* <button
            disabled={true}
            value="1"
            className="SquareDis"
            
            >  
               Payments
          </button> */}
          
          
          
        </div>
        {!this.state.showB ? null : <Buildings bldgsList2={this.props.bldgsList} />}
        {/* {!this.state.showM ? null : <Maint maintList={MaintList} />} */}
        {!this.state.showM ? null : <Maint superUser={this.props.superUser} userID={this.props.userID} />}
        {!this.state.showS ? null : <Subs bldgsList2={this.props.bldgsList}  superUser={this.props.superUser} userID={this.props.userID} />}
        {!this.state.showR ? null : <Reserve />}
      
      </div>
    );
  }
}

export default TopOptions;
