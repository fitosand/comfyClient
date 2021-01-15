import React from "react";
import Units from './Units';
import { 
  FaDoorClosed,
  FaMoneyCheckAlt,
  FaWrench
} from "react-icons/fa";
import 'antd/dist/antd.css';
import { Tag, Divider, Button, Alert, Card } from 'antd';
import {
    ToolTwoTone,
    HomeTwoTone,
    CreditCardTwoTone
  } from '@ant-design/icons';

interface AppProps3{
  // value: any,
  bldgsList2:string[]
  
}

//fetch on click (function)
let bldgUnits: string[] = ["Unit1", "Unit2", "Unit3"];

class Buildings extends React.Component<AppProps3> {



  render(){
    return (
      <div className="CategoryBoard">
        <h3>Buildings</h3>
          <ul className="Squares">  
            <li>
              <button style={{fontSize:"48px"}}  className="CenterSquare">+</button>
            </li> 
          {this.props.bldgsList2.map((d) => (
            <li className="cardPro">
              <div >
                  {/* <div className="cardPro-header">
                      <img src="./images/profile.jpeg" alt="Profile Image" className="profile-img"/>
                  </div> */}
                  <div className="cardPro-body">
                      <p className="full-name">{d}</p>
                      <p className="username">337 South New York Ave </p>
                      {/* <p className="desc">337 South New York Ave </p>  */}
                  </div>
                  <div className="cardPro-footer">
                      <div className="col vr">
                          <p className="stat"><a href="" className="count">8</a><br></br>units</p>
                      </div>
                      <div className="col vr">
                      <p className="stat"
                        ><a href="" className="count">$2.7K</a><br></br>due</p>
                      </div>
                      <div className="col">
                      <p className="stat"><a href="" className="count">3</a><br></br>fix</p>
                      </div>
                  </div>
              </div>
            </li>
          ))}
          
        </ul>
          
          <Units UnitsList={bldgUnits} />
        
        
      </div>
    );
  }
}

export default Buildings;


