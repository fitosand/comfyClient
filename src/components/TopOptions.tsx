import React, { useState } from "react";
import Buildings from './Buildings';
import Maint from './Maint';



interface AppProps2{
  // value: any,
  bldgsList:string[]
  
}

type StateVars = {
  showB:boolean,
  showM:boolean
}

let MaintList : 
    { 
      unit:number, 
      issue:string,
      date: any
    
    }[] = 
    [
      {"unit": 1, "issue": "fix floor", "date" : "12/08/20"},
      {"unit": 2, "issue": "broken roof", "date" : "12/08/20"},
      {"unit": 3, "issue": "floor needs repair", "date" : "12/08/20"}
    ];

//fetch user's maintenance items
// let MaintList: string[] = ["fix faucet", "fix floor", "fix ceiling"];

class TopOptions extends React.Component <AppProps2, StateVars>
{
  constructor(props: AppProps2) {
    super(props);
    this.state = {
      showB: false,
      showM:false
    };
    // console.log(this.state.showB);
  }

  render(){

    return (
      <div className="CategoryBoard">
        <div className="Squares">
          <button
            value="1"
            className="Square"
            
            onClick={(e) => 
              this.setState({ showB:true },
                () => {
                  this.setState({showM:false});
                }
             )} 
            >  
               Buildings
          </button>
          <button
            value="1"
            className="Square"
            onClick={() => 
              this.setState({ showM:true },
                () => {
                  this.setState({showB:false});
                }
             )} 
            // onClick={() => alert('tits')}
            >  
               Maintenance
          </button>
          <button
            disabled={true}
            value="1"
            className="SquareDis"
            // onClick={() => this.state.show:false}
            >  
               Payments
          </button>
          <button
            disabled={true}
            value="1"
            className="SquareDis"
            // onClick={() => this.state.show:false}
            >  
               Reservations
          </button>
          
        </div>
        {!this.state.showB ? null : <Buildings bldgsList2={this.props.bldgsList} />}
        {/* {!this.state.showM ? null : <Maint maintList={MaintList} />} */}
        {!this.state.showM ? null : <Maint />}
      
      </div>
    );
  }
}

export default TopOptions;
