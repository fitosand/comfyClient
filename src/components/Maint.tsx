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
    PlusCircleTwoTone
  } from '@ant-design/icons';
  import { Typography } from 'antd';

const { Paragraph } = Typography;

interface AppProps4{
    // value: any,
    // maintList:string[]
    // maintList:any
    
}

interface AppStates{

}


class Maint extends React.Component<AppProps4, {}> {

    // componentDidMount() {

    //     const baseUrl = 'http://localhost:3000/api/posts';
    
    //     fetch(baseUrl)
    //       .then((response) => (response.json())
    //         .then((responseData) => {
    //           console.log(responseData);
    //           //this.setState({ cards: responseData as CardData[] })
    //         })
    //         .catch((error) => {
    //           console.log("Error loading data", error);
    //         }));
    
    //   }

    render(){
        return (
            
            <div className="CategoryBoard">
                <h3>Maintenance Items</h3>
                
                <ul className="horCards">  
                <li className="horCard">
                    
                    <div className="cardCols">
                        <div className="cardColStart">
                            <img src={'https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png'} alt="boohoo" className="ImgMaint"/>
                            <div className="maintDesc">
                                    <div>Add</div>
                                </div>
                        </div>
                        <div className="cardColEnd">
                        <span className="addBtn">
                            <PlusCircleTwoTone />
                            {/* <button className="addBtn">
                                +
                            </button> */}
                        </span>
                        </div>
                    </div>
                    
                </li> 
                <li className="horCard">
                    <div className="cardCols">
                        <div className="cardColStart">
                        <img src={'https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png'} alt="boohoo" className="ImgMaint"/>
                                <div className="maintDesc">
                                    <Paragraph ellipsis>
  
                                    <div>Unit: 1</div>
                                    <div className="issueDetails">Issue: Broken Roof Broken RoofBroken Roof Broken Roof Broken Roof Broken Roof</div>
                                    <div>Date: 12/08/2020</div>
                                    </Paragraph>
                                </div>
                                
                        </div>
                        <div className="cardColEnd">
                                    <span className="addBtn">
                                        <ClockCircleTwoTone twoToneColor="#eb2f96" />
                                    </span>
                                </div>
                        {/* <div className="cardColEnd">
                            <span className="tag">
                            <Button type="primary">Update</Button>
                            </span>
                        </div> */}
                        
                    </div>
                </li>
                <li className="horCard">
                    <div className="cardCols">
                        <div className="cardColStart">
                        <img src={'https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png'} alt="boohoo" className="ImgMaint"/>
                                <div className="maintDesc">
                                    <div>Unit: 1</div>
                                    <div>Issue: Broken Roof</div>
                                    <div>Date: 12/08/2020</div>
                                </div>
                                
                        </div>
                        <div className="cardColEnd">
                                    <span className="addBtn">
                                    <ClockCircleTwoTone twoToneColor="#eb2f96" />
                                    </span>
                                </div>
                        {/* <div className="cardColEnd">
                       
                        <Button type="primary">Update</Button>
                        </div> */}
                        
                    </div>
                </li>
                <li className="horCard">
                    <div className="cardCols">
                    <img src={'https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png'} alt="boohoo" className="ImgMaint"/>
                        <div className="maintDesc">
                            <div>Unit: 1</div>
                            <div>Issue: Broken Roof</div>
                            <div>Date: 12/08/2020</div>
                        </div>
                        <div className="cardColEnd">
                            <span className="addBtn">
                                <CheckCircleTwoTone twoToneColor="#52c41a" />
                            </span>
                        </div>
                        {/* <div className="cardColEnd">
                            <span className="tag">
                            <Button type="primary">Update</Button>
                            </span>
                        </div> */}
                    
                        {/* <div className="cardColEnd">
                            <span className="tag">
                            <Button type="primary">Update</Button>
                            </span>
                        </div> */}
                    </div>
                </li> 
                {//this.props.maintList.map((c:any) => (
                // <li className="horCard">
                //     <div className="cardCols">
                //     <img src={'https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png'} alt="boohoo" className="ImgMaint"/>
                //         <div className="maintDesc">
                //             {/* <button onClick={(e) => alert({c})} > */}
                //             <div>Unit: 1</div>
                //             <div>{c}</div>
                //         </div>
                //         <div className="tagWrap">
                //             <span className="tag">
                //                 <CheckCircleTwoTone twoToneColor="#52c41a" />
                //             </span>
                //         </div>
                        
                //         <div className="cardColEnd">
                //             <span className="tag">
                //             <Button type="primary">Update</Button>
                //             </span>
                //         </div>
                        
                //     </div>
                    
                // </li>
                //))
            }          
                </ul>
               
            </div>

        )
    };

}

export default Maint;