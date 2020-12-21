import React from "react";
import Units from './Units';
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
        {/* <div className="Squares">
          <div>
              <button style={{fontSize:"48px"}}  className="Square">+</button>
          </div> 
                <div className="Square">
                    <Card title="Villa I" extra={<a href="#">More</a>} >
                        <p> <HomeTwoTone /> 23</p>
                        <p><CreditCardTwoTone /> 3 due</p>
                        <p><ToolTwoTone /> 5</p>
                    </Card>
                </div>
        </div> */}
          <ul className="Squares">  
          <li><button style={{fontSize:"48px"}}  className="Square">+</button></li> 
            {this.props.bldgsList2.map((d) => (
              <li className="Square">
              {/* //<button onClick={(e) => alert({d})} className="Square">{d}</button> */}
              <Card title={d} >
                        <p> <HomeTwoTone /> 23</p>
                        <p><CreditCardTwoTone /> 3 due </p>
                        <p><ToolTwoTone /> 5</p>
                    </Card>
              </li>
            ))}
          
        </ul>
          
          <Units UnitsList={bldgUnits} />
        
        
      </div>
    );
  }
}

export default Buildings;


