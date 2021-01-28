import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from 'react-icons/ai'
// import avatar from '../Assets/avatar.png';
// import * as ioIcons from "react-icons/io5";
import Maint from '../components/Maint'

interface LogProps2 {
    userID:string,
  superUser:boolean,
  
};

interface LogStates2 {
  
};

class RPanel extends React.Component < LogProps2,LogStates2>  {

    render(){
        return(
        <div >
            <Maint superUser={this.props.superUser} userID={this.props.userID} />

        </div>
        )
    }
}

export default RPanel;