import React from "react";
import Units from './Units';
import 'antd/dist/antd.css';
import { RiCarWashingFill}  from "react-icons/ri";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { AiOutlineWindows } from "react-icons/ai";
import { GiVacuumCleaner, GiClothes } from "react-icons/gi";


interface AppProps3{
  // value: any,
  bldgsList2:string[],
  superUser:boolean,
  userID:string
  
}

interface AppStates {
    bldgUnits:string[],

}


class Subs extends React.Component<AppProps3, AppStates> 
{
    constructor(props: AppProps3) 
    {
        super(props);
        this.state = {
        bldgUnits: ['Unit1', 'Unit2', 'Unit3']
    };
          
}

  render(){
    return (
      <div className="CategoryBoard">
        <div>
            <span className="subsTitle">My Subscriptions (0)</span >
            <span ><button className="activeList">active</button></span>
            <span ><button className="inactiveList chosenButton">inactive</button></span>
        </div>
          <ul className="horCards">  
            <li className="horCard">
                <div className="cardCols">
                <div className="windowCleaningIcon"><AiOutlineWindows /></div>

                    {/* <div className="serviceName">window cleaning</div> */}

                    <div className="maintDesc">
                        <div><b>Window Cleaning</b></div>
                        <div className="serviceFreq">cleaned 2x/week</div>
                        <div><b>$8.99/month</b></div>
                    </div>

                    <div className="cardColEnd">
                        <span className="addBtn">
                            <button></button>
                        </span>
                    </div>
                    <div className="cardColEnd">
                        <span className="addBtn">
                            <button className="addSubsBtn"></button>
                        </span>
                    </div>
                                
                </div>
            </li> 
            <li className="horCard">
                <div className="cardCols">
                <div className="insuranceIcon"><CgSmartHomeWashMachine /></div>
                    

                    {/* <div className="serviceName">window cleaning</div> */}

                    <div className="maintDesc">
                        <div><b>Washer/Dryer Insurance</b></div>
                        <div className="serviceFreq">renews every year</div>
                        <div><b>$1.99/month</b></div>
                    </div>

                    <div className="cardColEnd">
                        <span className="addBtn">
                            <button></button>
                        </span>
                    </div>
                    <div className="cardColEnd">
                        <span className="addBtn">
                            <button className="addSubsBtn"></button>
                        </span>
                    </div>
                                
                </div>
            </li> 
            <li className="horCard">
                <div className="cardCols">
                    <div className="serviceIcon"><RiCarWashingFill /></div>
                    {/* <img src={'https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png'} alt="boohoo" className="ImgMaint"/> */}

                    {/* <div className="serviceName">window cleaning</div> */}

                    <div className="maintDesc">
                        <div><b>Mobile Eco Car Wash</b></div>
                        <div className="serviceFreq">2x/week</div>
                        <div><b>$14.99/month</b></div>
                    </div>

                    <div className="cardColEnd">
                        <span className="addBtn">
                            <button></button>
                        </span>
                    </div>
                    <div className="cardColEnd">
                        <span className="addBtn">
                            <button className="addSubsBtn"></button>
                        </span>
                    </div>
                                
                </div>
            </li> 
            <li className="horCard">
                <div className="cardCols">
                <div className="steamIcon"><GiVacuumCleaner /></div>

                    {/* <div className="serviceName">window cleaning</div> */}

                    <div className="maintDesc">
                        <div><b>Home Steam Disinfection Service</b></div>
                        <div className="serviceFreq">1/week</div>
                        <div><b>$12.99/month</b></div>
                    </div>

                    <div className="cardColEnd">
                        <span className="addBtn">
                            <button></button>
                        </span>
                    </div>
                    <div className="cardColEnd">
                        <span className="addBtn">
                            <button className="addSubsBtn"></button>
                        </span>
                    </div>
                                
                </div>
            </li> 
            <li className="horCard">
                <div className="cardCols">
                <div className="clothesIcon"><GiClothes /></div>

                    {/* <div className="serviceName">window cleaning</div> */}

                    <div className="maintDesc">
                        <div><b>Home Steam Disinfection Service</b></div>
                        <div className="serviceFreq">1/week</div>
                        <div><b>$12.99/month</b></div>
                    </div>

                    <div className="cardColEnd">
                        <span className="addBtn">
                            <button></button>
                        </span>
                    </div>
                    <div className="cardColEnd">
                        <span className="addBtn">
                            <button className="addSubsBtn"></button>
                        </span>
                    </div>
                                
                </div>
            </li> 
          {/* {this.props.bldgsList2.map((d) => (
            <li className="cardPro">
              <div >
                  
                  <div className="cardPro-body">
                      <p className="full-name">{d}</p>
                      <p className="username">337 South New York Ave </p>
                      
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
          ))} */}
          
        </ul>
          
          {/* <Units UnitsList={this.state.bldgUnits} /> */}
        
        
      </div>
    );
  }
}

export default Subs;


