import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai'
import avatar from '../Assets/avatar.png';
import * as ioIcons from "react-icons/io5";

interface LogProps2 {
  LogStatus:boolean,
  StatUpdate:() => void;
  StatUpdate3:() => void;
  bInfo:string,
  UnitInfo:string,
  superUser:boolean
};

interface LogStates2 {
  
};

class Sidebar extends React.Component < LogProps2,LogStates2>  {
    

  render(){

    console.log("superUser:",this.props.bInfo)
    return(
    <div className="Sidebar">
      <div className="brandBanner">
        <span>Comfy</span>
        <span>...</span>
      </div>
      <div className="centerSideItems">
      <div className="SidebarItemUser">
        <div>
       
          <img
            className="avatarPhoto"
            alt="user"
            src={avatar}
          />
        </div>
        <div className="userInfo">
        <div className="SidebarItemText">Pablo Mejia</div>
        <p style={{ color: '#00dcb8' }}>{!this.props.superUser? 'resident'
         : 'admin' }</p>

         {/* show info if resident */}
         <span style={{fontSize:'10px', color:'gray'}}>
         {
          !this.props.superUser?
           this.props.bInfo:''
         }
          </span>
          <span style={{fontSize:'10px', color:'gray'}}>
         {
          !this.props.superUser?
           this.props.UnitInfo:''
         }
          </span>

        </div>
      </div>
      <div className="SidebarItemActive">
        <div className="SidebarItemIcon"><AiIcons.AiFillHome /></div>
        <div className="SidebarItemText">Home</div>
      </div>
      <div className="SidebarItem">
        <div className="SidebarItemIcon"><AiIcons.AiFillMessage /></div>
        <div className="SidebarItemText">Messages</div>
        <p style={{fontSize:'10px', color:'#00dcb830'}}>(coming soon)</p>
      </div>
      <div className="SidebarItem">
        <div className="SidebarItemIcon"><AiIcons.AiFillCloud /></div>
        <div className="SidebarItemText">Docs</div>
        <p style={{fontSize:'10px', color:'#00dcb830'}}>(coming soon)</p>
      </div>

      {/* <div className="SidebarItem">
        <div className="SidebarItemIcon"><FaIcons.FaBars /></div>
          <div className="SidebarItemText">inventario</div>
      </div> */}
      <button className="SidebarItem"
    onClick = { () => {
      
      this.props.StatUpdate3();
      //alert(this.props.LogStatus)
    }
    }
      // onClick = { () => alert(this.props.LogStatus) }
        // onClick={(e) => 
        //       this.setState({ LogStatus:false },
                
        //      )}
             >
        <div className="SidebarItemIcon"><ioIcons.IoLogOut /></div>
          
          <div className="SidebarItemText">logout</div>
      </button>
      </div>
    </div>
    )
  };
}

export default Sidebar;
