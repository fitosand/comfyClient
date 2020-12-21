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
                <li><button style={{fontSize:"48px"}}  className="Square">+</button></li> 
                    {this.props.UnitsList.map((c) => (
                    <li><button onClick={(e) => alert({c})} className="Square">{c}</button>
                    </li>
                    ))}          
                </ul>
               
            </div>

        )
    };

}

export default Units;