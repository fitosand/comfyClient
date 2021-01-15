import React from "react";

interface AppProps4{
    // value: any,
    UnitsList:string[]
    
  }


class Units extends React.Component<AppProps4> {

    render(){
        return (
            <div className="CategoryBoard">
                <h3>Units</h3>
                <ul className="Squares">  
                
                
                    <li>
                    <button style={{fontSize:"48px"}}  className="CenterSquare">+</button>
                    </li> 
                    {this.props.UnitsList.map((d) => (
                        <li className="cardPro">
                            <div >
                                {/* <div className="cardPro-header">
                                    <img src="./images/profile.jpeg" alt="Profile Image" className="profile-img"/>
                                </div> */}
                                <div className="cardPro-body">
                                    <p className="full-name">{d}</p>
                                    <p className="username">Adolfo Sandoval </p>
                                    {/* <p className="desc">337 South New York Ave </p>  */}
                                </div>
                                <div className="cardPro-footer">
                                    <div className="col vr">
                                        <p className="stat"><a href="" className="count">3</a><br></br>subs</p>
                                    </div>
                                    <div className="col vr">
                                    <p className="stat"
                                        ><a href="" className="count">$1K</a><br></br>due</p>
                                    </div>
                                    <div className="col">
                                    <p className="stat"><a href="" className="count">1</a><br></br>fix</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
          
                </ul>
                    {/* {this.props.UnitsList.map((c) => (
                    <li>
                        <button onClick={(e) => alert({c})} className="CenterSquare">{c}</button>
                    </li>
                    ))}          
                </ul> */}
               
            </div>

        )
    };

}

export default Units;