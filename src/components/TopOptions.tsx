import React, { useState } from "react";
import Buildings from './Buildings';
import Maint from './Maint';
import Subs from './Subs';
import Reserve from './Calendar';
import '../Calendar.css'
import { BsCalendarFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import avatar from '../Assets/avatar.png';
import { FaRedoAlt } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";

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
      <div>
        <div className="dashNavBar">
          <div style={{color:"lightgray"}}>search</div>
          <div>
            <img
              className="avatarPhoto"
              alt="user"
              src={avatar}
            />
          </div>

        </div>
      <div className="CategoryBoard">
        <div className="Squares">
          {this.props.superUser? //if admin
          <button
            value="1"
            className={this.state.showB ? 'CenterSquareActive' : 'CenterSquare'}
            
            onClick={(e) => 
              this.setState({ showB:true },
                () => {
                  this.setState({
                    showM:false,
                    showS:false,
                    showR:false
                  });
                }
             )} 
            >  
            <div className="card1__description">
              <div className="icon fa fa-flask card1__descriptionIcon">
                <RiHotelLine />
              </div>
              <div className="card1__descriptionText">
                {/* {this.state.items[0].service} */}
              </div>
              <div className="priceText">Buildings</div>
            </div>
          </button>
          :
          ''
          }
          
          <button
            disabled={false}
            value="1"
            className={this.state.showS ? 'CenterSquareActive' : 'CenterSquare'}
            onClick={(e) => 
              this.setState({ showS:true },
                () => {
                  this.setState({
                    showM:false,
                    showB:false,
                    showR:false
                  });
                }
             )} 
            >  
            <div className="card1__description">
              <div className="icon fa fa-flask card1__descriptionIcon">
                <FaRedoAlt />
              </div>
              <div className="card1__descriptionText">
                {/* {this.state.items[0].service} */}
              </div>
              <div className="card1__descriptionText">Subscriptions</div>
            </div>
            {/* <RiCheckboxMultipleFill /><span> Subscriptions</span> */}
          </button>
          <button
            value="1"
            className={this.state.showM ? 'CenterSquareActive' : 'CenterSquare'}
            onClick={() => 
              this.setState({ showM:true },
                () => {
                  this.setState({
                    showB:false,
                    showS:false,
                    showR:false
                  });
                }
             )} 
            // onClick={() => alert('tits')}
            >  
            <div className="card1__description">
              <div className="icon fa fa-flask card1__descriptionIcon">
                <FaTools />
              </div>
              <div className="card1__descriptionText">
                {/* {this.state.items[0].service} */}
              </div>
              <div className="card1__descriptionText">Maintenance</div>
            </div>
          </button>
          <button
            disabled={false}
            value="1"
            className={this.state.showR ? 'CenterSquareActive' : 'CenterSquare'}
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
            <div className="card1__description">
              <div className="icon fa fa-flask card1__descriptionIcon">
                <BsCalendarFill />
              </div>
              <div className="card1__descriptionText">
                {/* {this.state.items[0].service} */}
              </div>
              <div className="card1__descriptionText">Reservations</div>
            </div>
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
        {!this.state.showR ? null : <Reserve userID={this.props.userID} />}
      
      </div>
    </div>
    );
  }
}

export default TopOptions;
