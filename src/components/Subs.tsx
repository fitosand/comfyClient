import React from "react";
// import Units from './Units';
import 'antd/dist/antd.css';
import { RiCarWashingFill}  from "react-icons/ri";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { AiOutlineWindows } from "react-icons/ai";
import { GiVacuumCleaner, GiClothes } from "react-icons/gi";
import { FcCheckmark } from "react-icons/fc";

//stripe checkout library
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
// import axios from "axios";
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe("pk_test_51Hgsw1F8G2AFQqZaHjBzJtwhluK6M0wbNm39a0iY2PKNOxXVMQHIbzCRqQEU2EacETTw8JqxhKDS5xTeaic3XF9X00keCD6mLj");

toast.configure();


interface AppProps3{
  // value: any,
  bldgsList2:string[],
  superUser:boolean,
  userID:string
  
}

interface AppStates {
    bldgUnits:string[],
    items: any;
    // token:string,
    product:any,
    windClean: boolean, 
    carWash:  boolean,
    oilPick:  boolean,
    houseClean:  boolean,
    washerIns:  boolean,
    dryerIns:  boolean,
    subType: string
    // handleToken: () => void;

}


// function handleToken(token, product){
//     toast("Success! Check email for details", { type: "success" });
//   }

//   function handleToken(token, product){
//     toast("Success! Check email for details", { type: "success" });

//     fetch('/save-stripe-token', {
//         method: 'POST',
//         body: JSON.stringify(token),
//       }).then(response => {
//         response.json().then(data => {
//           alert(`We are in business, ${data.email}`);
//         });
//       });

    // const response = await axios.post(
    // "https://ry7v05l6on.sse.codesandbox.io/checkout",
    // { token, product }
    // );
    // const { status } = response.data;
    // console.log("Response:", response.data);
    // if (status === "success") {
    // toast("Success! Check email for details", { type: "success" });
    // } else {
    // toast("Something went wrong", { type: "error" });
    // }
//}


class Subs extends React.Component<AppProps3, AppStates> 
{
    constructor(props: AppProps3) 
    {
        super(props);
        this.state = {
        bldgUnits: ['Unit1', 'Unit2', 'Unit3'],
        items: [
            {
              service: "window cleaning",
              price: "$2.99",
              detail: "2/mo"
            },
    
            {
              service: "car wash",
              price: "$2.99",
              detail: "2/mo"
            },
            {
              service: "oil recycle",
              price: "$2.99",
              detail: "2/mo"
            }
          ],
        //   token:'',
          product: [{
            service: "window cleaning",
            price: "$2.99",
            detail: "2/mo"
    
        }],
        //subscription types
        windClean: false, 
        carWash:  false,
        oilPick:  false,
        houseClean:  false,
        washerIns:  false,
        dryerIns:  false,
        subType: 'windClean'
    };
    
          
}

  async handleToken(token:any){
        // console.log(token);
        // console.log('front-end');
        try{
            let response = await fetch("http://localhost:3000/api/payment/checkout", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "token": token,
                "product": {
                    "name": "window cleaning",
                    "price": 8.99,
                    "detail": "2/mo"
                
                    }
            })
        
            })
            
            if (!response.ok) 
            {
                throw response.statusText;
            } 
            else//if response is OK
            {
                
                toast("Success! Check email for details", { type: "success" });

                // ** change status on our db ** 
                await fetch('http://localhost:3000/api/subs/new',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'     
                    },
                    body: JSON.stringify({
                        "userID": '123',
                        subType: true
                    })
                    
                // }) //NEW STUFF ENDS HERE

                })
                .then(resp => {
                    resp.json()
                    })
                .then(json2 => {
                    console.log('changed our db:',json2)
                    });
            } 
        } 
        catch (e) {
            //console.log('this')
            console.error('front-end Error', e);
            toast("Something went wrong", { type: "error" });
            return null
        }

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
                        <StripeCheckout
                            stripeKey="pk_test_51Hgsw1F8G2AFQqZaHjBzJtwhluK6M0wbNm39a0iY2PKNOxXVMQHIbzCRqQEU2EacETTw8JqxhKDS5xTeaic3XF9X00keCD6mLj"
                            token={this.handleToken}
                            amount={this.state.product.price * 100}
                            name={this.state.product.service}
                            // billingAddress
                            // shippingAddress
                        >
                            <button value="0" className="addSubsBtn"></button>
                        </StripeCheckout>
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
                            <button className="subscribedButton"><FcCheckmark /></button>
                        </span>
                    </div>
                                
                </div>
            </li> 
          
        </ul>
          
          {/* <Units UnitsList={this.state.bldgUnits} /> */}
        
        
      </div>
    );
  }
}

export default Subs;


