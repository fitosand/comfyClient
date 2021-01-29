import React from "react";
import 'antd/dist/antd.css';

 
import { Typography } from 'antd';
import { toast } from "react-toastify";

toast.configure();

const { Paragraph } = Typography;

interface AppProps4{
    // value: any,
    // maintList:string[]
    // maintList:any
    userID:string,
    superUser:boolean,
 
    
}

interface AppStates{
    // maintItems:{
    //     unit:string,
    //     issue: string,
    //     date:string

    // },
    numItems:number,
    idNum:any,
    unit:string,
    issue:string,
    status:string,
    sendUnit: (e: any) => void;
    sendIssue: (e: any) => void;
    maintItems:[],
    token:string,
    fixed:boolean

}


class Maint extends React.Component<AppProps4, AppStates> {
    constructor(props: any) {
        super(props);
        this.state = {
            // maintItems:{
            //     unit:'',
            //     issue: '',
            //     date:''
        
            // },
            numItems:0,
            idNum:'',
            unit:'',
            issue:'',
            status:'',
            fixed:false,
            sendUnit: (e) => this.setState({ unit: e }),
            sendIssue: (e) => this.setState({ issue: e }),
            maintItems:[],
            token: ''
            
            
        }
        
    }

    
    //DISPLAY ALL MAINTANENANCE ITEMS (admin mode)
    componentDidMount(){
        console.log(this.props.superUser);
        console.log(this.props.userID);

        //***If not superUser, show specific
        {
            !this.props.superUser ?
            fetch('http://localhost:3000/api/posts/'+this.props.userID,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': ''+localStorage.getItem('auth-token')
            }
            })
            .then((response) => (response.json())
            .then((responseData) => {
                //console.log(responseData);
                this.setState({ maintItems: responseData })
                this.setState({numItems: this.state.maintItems.length})
                console.log(this.state.maintItems.length);
                //console.log(this.props.userID);
                
            })
            .catch((error) => {
                console.log("Error loading data", error);
            }))
            :

            //***IF SUPERUSER IS TRUE (ADMIN), SHOW ALL***
            fetch('http://localhost:3000/api/posts/',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': ''+localStorage.getItem('auth-token')
            }
            })
            .then((response) => (response.json())
            .then((responseData) => {
                //console.log(responseData);
                this.setState({ maintItems: responseData })
                this.setState({numItems: this.state.maintItems.length})
                console.log(this.state.maintItems.length);
                // console.log(this.state.maintItems);
                //console.log(this.props.userID);
                
            })
            .catch((error) => {
                console.log("Error loading data", error);
            }));

        }

    }

    //ADD MAINTENANCE ITEMS (new post)
    async maintUpdate(){
        await fetch('http://localhost:3000/api/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': ''+localStorage.getItem('auth-token')
        },
        body: JSON.stringify({
            "userID": this.props.userID,
            "unit": this.state.unit,
            "issue": this.state.issue
        })
        
        })
        .then((response) => (response.json())
        .then((responseData) => {
            // console.log(responseData);
            // alert('Ticket Created!');
            toast("Ticket Created!", { type: "success" });
            
            this.componentDidMount();//reload tickets!
            
             
        })
        .catch((error) => {
            console.log("Error loading data", error);
        }));

    }

    //change maintance status
    async changeStatus(){
        //ask user for confirmation
        window.confirm("Are you sure you wish to change the status?") &&
        // fetch if confirmed...
        //console.log('http://localhost:3000/api/posts/'+this.state.idNum._id);
        fetch('http://localhost:3000/api/posts/'+this.state.idNum._id,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': ''+localStorage.getItem('auth-token')
        },
        body: JSON.stringify({
          "status": this.state.fixed ? "fixed" : "broken" 
        })
        
        })
        .then((response) => (response.json())
        .then(() => {
            //console.log(responseData);
            // alert('Congrats! Issue fixed.');
            toast("Congrats! Issue fixed.", { type: "success" });
            this.componentDidMount();//reload tickets!
             
        })
        .catch((error) => {
            console.log("Error loading data", error);
        }));


    }

    //delete post
    async delPost(){
        //ask user for confirmation
        window.confirm("Are you sure you want to delete this post?") &&
        // fetch if confirmed...
        //console.log('http://localhost:3000/api/posts/'+this.state.idNum._id);
        fetch('http://localhost:3000/api/posts/'+this.state.idNum._id,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': ''+localStorage.getItem('auth-token')
            
        },
        
        })
        .then((response) => (response.json())
        .then(() => {
            //console.log(responseData);
            // alert('item Deleted!');
            toast("item Deleted!", { type: "success" });
            this.componentDidMount();//reload tickets!
             
        })
        .catch((error) => {
            console.log("Error loading data", error);
        }));


    }

    render(){
        return (
            
            <div className="CategoryBoard">
                <h3>Maintenance Requests ({this.state.numItems})</h3>
                
                <ul className="horCards">
                    
                <li className="horCard2">
                    <div className="cardColsAdd"> 
                    
                    <form className="AddForm"
                        onSubmit={(e: React.SyntheticEvent) => {
                            e.preventDefault();
                            console.log('new Added!');
                            
                            this.maintUpdate();
                            }}
                    >
                        <input 
                        onChange={(event) => {
                            const { target } = event;
                            if (target) {
                              //console.log(target.value);
                              
                              this.state.sendUnit(target.value);
                              //console.log(this.state.unit);
                            }
                          }}
                        autoComplete="off" className="formInput1" placeholder="Unit #" type="text" name="email"/>

                        <input
                        onChange={(event) => {
                            const { target } = event;
                            if (target) {
                              //console.log(target.value);
                              this.state.sendIssue(target.value);
                              //console.log(this.state.issue);
                            }
                          }}
                        autoComplete="off" className="formInput" placeholder="Describe your Issue" type="text" name="email"/>
                        <button className="addNewBtn" type="submit">
                        {/* <HiArrowNarrowRight /> */}

                        </button>
                    </form>
                    
                    </div>                          
                    
                </li> 
                
                {/* ITERATE OVER LIST OF ITEMS HERE */}
                {this.state.maintItems.map(( {resident,_id, unit, issue, date, status} ) => {
                return <li className={status === 'fixed' 
                ? "horCardClosed" : "horCardOpen fade" 
                } key={_id}>
                        <div className="cardCols">
                           
                            <img src={'https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png'} alt="boohoo" className="ImgMaint"/>
                            <div className="maintDesc">
                                <div><b>Unit:</b> {unit}</div>
                                <div><b>Issue:</b> {issue}</div>
                                <div><b>Time:</b> {date}</div>
                            </div>

                            {this.props.superUser? //if user is admin, show buttons
                            <div className="cardColEnd">
                                <span className="addBtn">
                                    {/* <ClockCircleTwoTone twoToneColor="#eb2f96" /> */}
                                    <button
                                        onClick = { async () => 
                                        {
                                            // console.log(!{status})
                                            this.setState({ fixed: !this.state.fixed });
                                            await this.setState({ idNum: {_id}})
                                            //console.log(this.state.idNum);
                                            this.changeStatus();
                                        }}
                                        className=
                                        {status === 'fixed' 
                                        ? "fixedButton" : "brokenButton" 
                                        }
                                    >{status}
                                    </button>
                                </span>
                                <button 
                                onClick = { async () => 
                                    {
                                        
                                        await this.setState({ idNum: {_id}})
                                        //console.log(this.state.idNum);
                                        this.delPost();
                                    }}
                                className="delButton"></button>
                            </div>
                            :
                            //show status + disabled button
                            <div className="cardColEnd">
                                <span className="addBtn">
                                    {/* <ClockCircleTwoTone twoToneColor="#eb2f96" /> */}
                                    <button disabled={true}
                                        
                                        className=
                                        {status === 'fixed' 
                                        ? "closedTicket" : "openTicket" 
                                        }
                                    >
                                        {/* {status} */}
                                    </button>
                                </span>
                            </div>
                            }
                            
                        </div>
                    </li>
                    
                    })}
                      
                </ul>
               
            </div>

        )
    };

}

export default Maint;