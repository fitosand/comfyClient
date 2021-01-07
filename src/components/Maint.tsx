import React from "react";
import 'antd/dist/antd.css';
import { Tag, Divider, Button, Alert, Card } from 'antd';
import {
    PlusOutlined,
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
    SmileTwoTone, HeartTwoTone, CheckCircleTwoTone, ClockCircleTwoTone,
    PlusCircleTwoTone,
    
  } from '@ant-design/icons';
  import { HiArrowNarrowRight } from "react-icons/hi";
  import { Typography } from 'antd';

const { Paragraph } = Typography;

interface AppProps4{
    // value: any,
    // maintList:string[]
    // maintList:any
    
}

interface AppStates{
    // maintItems:{
    //     unit:string,
    //     issue: string,
    //     date:string

    // },
    unit:string,
    issue:string,
    status:string,
    sendUnit: (e: any) => void;
    sendIssue: (e: any) => void;
    maintItems:[],
    token:string

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
            unit:'',
            issue:'',
            status:'',
            sendUnit: (e) => this.setState({ unit: e }),
            sendIssue: (e) => this.setState({ issue: e }),
            maintItems:[],
            token: ''
            
        }
        
    }

    
    //DISPLAY MAINTANENANCE ITEMS
    componentDidMount(){
        fetch('http://localhost:3000/api/posts',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmY0YWZiMjg4ZGRiMDAzZGVhMWRiMjQiLCJpYXQiOjE2MDk4NzQ4MzR9.BYKDCqybOyjN3jDkfx_r-P5BkMQ1Du0pHx7tGDZ8P5g"
        },
        
        })
        .then((response) => (response.json())
        .then((responseData) => {
            // console.log(responseData);
            this.setState({ maintItems: responseData })
            console.log(responseData);
             
        })
        .catch((error) => {
            console.log("Error loading data", error);
        }));

    }

    //ADD MAINTENANCE ITEMS
    maintUpdate(){
        fetch('http://localhost:3000/api/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmY0YWZiMjg4ZGRiMDAzZGVhMWRiMjQiLCJpYXQiOjE2MDk4NzQ4MzR9.BYKDCqybOyjN3jDkfx_r-P5BkMQ1Du0pHx7tGDZ8P5g"
        },
        body: JSON.stringify({
          "unit": this.state.unit,
          "issue": this.state.issue
        })
        
        })
        .then((response) => (response.json())
        .then((responseData) => {
            console.log(responseData);
            alert('Ticket Created!')
             
        })
        .catch((error) => {
            console.log("Error loading data", error);
        }));

    }

    render(){
        return (
            
            <div className="CategoryBoard">
                <h3>Maintenance Requests</h3>
                
                <ul className="horCards">
                    {/* THIS IS THE ADD BUTTON */}  
                {/* <li className="horCard1">
                    
                    <div className="cardCols">
                        <div className="center">
                            <div className="cardColStart">
                                <img src={'https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png'} alt="boohoo" className="ImgMaint"/>
                                <div className="maintDesc">
                                        <div>Add</div>
                                    </div>
                            </div>
                            <span>+</span>
                        </div>
                        
                    </div>
                    
                </li>  */}
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
                              console.log(this.state.issue);
                            }
                          }}
                        autoComplete="off" className="formInput" placeholder="Describe your Issue" type="text" name="email"/>
                        <button className="addNewBtn" type="submit">
                            <HiArrowNarrowRight />
                        </button>
                    </form>
                    
                    </div>                          
                    
                </li> 
                
                {/* ITERATE OVER LIST OF ITEMS HERE */}
                {this.state.maintItems.map(( {unit, issue, date, status} ) => {
                return <li className="horCard" key={unit}>
                        <div className="cardCols">
                           
                            <img src={'https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png'} alt="boohoo" className="ImgMaint"/>
                            <div className="maintDesc">
                                <div><b>Unit:</b> {unit}</div>
                                <div><b>Issue:</b> {issue}</div>
                                <div><b>Time:</b> {date}</div>
                            </div>
                            <div className="cardColEnd">
                                <span className="addBtn">
                                    {/* <ClockCircleTwoTone twoToneColor="#eb2f96" /> */}
                <button
                onClick = { () => alert('Confirm change?') }
                 className="brokenButton">{status}</button>
                                </span>
                            </div>
                            
                        </div>
                    </li>
                    
                    })}
                
                
                <li className="horCard">
                    <div className="cardCols">
                    <img src={'https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png'} alt="boohoo" className="ImgMaint"/>
                        <div className="maintDesc">
                            <div><b>Unit:</b>  1</div>
                            <div><b>Issue:</b> Broken Roof</div>
                            <div><b>Time:</b> 12/08/2020, 05:04:32 PM</div>
                        </div>
                        <div className="cardColEnd">
                            <span className="addBtn">
                                {/* <CheckCircleTwoTone twoToneColor="#52c41a" /> */}
                                <button className="fixedButton">fixed</button>
                            </span>
                        </div>
                        
                    </div>
                </li> 
                      
                </ul>
               
            </div>

        )
    };

}

export default Maint;