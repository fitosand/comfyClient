import * as React from "react";
// import EventCalendar from "./components/EventCalendar";
//import daygrid from "fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { FaSwimmingPool } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { GiPartyPopper } from "react-icons/gi";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


interface LogProps {
  userID:String
}

interface LogStates {
  // handleDateClick: () => void;
  user:String,
  title:String,
  start:any,
  end:any,
  calendarEvents: any
}

export default class theCalendar extends React.Component<LogProps, LogStates> {
  // export default function App() {
  constructor(props: LogProps) {
    super(props);

    this.state = {
      // handleDateClick = (e) => alert(e.dateStr)
      calendarEvents: [
        // initial event data
        {
          title: "Event Now",
          start: new Date(),
          end: "2021-01-05T11:30:00"
        },
        { title: "event 2", start: "2021-01-15" }
      ],
      
      title:'',
      start:'',
      end:'',
      user:'',
    };
  } 


  //FETCH CURRENT CALENDAR ITEMS FOR THIS BUILDING
  componentDidMount(){
    //fetch('http://localhost:3000/api/posts/'+this.props.userID
    fetch('http://localhost:3000/api/calendar/events/Castilla', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    
    })
    .then((response) => (response.json())
    .then((responseData) => {
        // console.log(responseData);
        
        this.setState({
      
          // add new event data
  
          calendarEvents: responseData //WORKS!!!!
          
          // this.state.calendarEvents.concat({
            
          //   // creates a new array
          //   title: "Pool Reservation",
          //   //date: arg.dateStr
          //   start: arg.dateStr,
          //   end: arg.dateStr
          //   // allDay: false
          // })
        });
        
         
    })
    .catch((error) => {
        console.log("Error loading data", error);
    }));
    
    
  }

  //Update calendar Items for this building
  async CalUpdate(){
    
    // console.log(this.state.title, this.state.start, this.state.end, this.state.user);
    await fetch('http://localhost:3000/api/calendar/events/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          'bldgName': 'Castilla',
          "title": this.state.title,
          "start": this.state.start,
          "end": this.state.end, 
          "user": this.props.userID
          // "title": "POOL",
          // "start": "2021-01-12T09:00:00-05:00",
          // "end": "2021-01-12T10:00:00-05:00", 
          // "user": "123"

      })
    
    })
    .then((response) => (response.json())
    .then((responseData) => {
        // console.log(responseData);
        //console.log(this.state.start)
        // alert('Ticket Created!');
        // toast("Ticket Created!", { type: "success" });
        
        this.componentDidMount();//reload events!      
         
    })
    .catch((error) => {
        console.log("Error loading data", error);
    }));
      
}

  handleDateClick = (arg: any) => {
    this.setState({
      title: "Pool Reservation",
      start:arg.dateStr,
      end: arg.dateStr,
      user: this.props.userID,

    })
    //console.log(arg.dateStr);
    // FullCalendar.changeView = "dayGridDay";
    if (
      window.confirm("Please, confirm your Reservation:\n" + arg.date + " ?")
    ) {
      //call fetchUpdate data here!
      
      this.setState({
      
        // add new event data

        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: "Pool Reservation",
          //date: arg.dateStr
          start: arg.dateStr,
          end: arg.dateStr
          // allDay: false
        })
      });
      this.CalUpdate();
      toast.success('Your reservation was made. Check Email for details. Enjoy the pool!',{
        position:toast.POSITION.TOP_RIGHT,
        draggable: false,
      })
    }
  };


  render() {
    return (
      <div className="CalendarWrapper">
        <div className="reserveButtons">
          <button className="reserveName">
            <span className="poolIcon"><FaSwimmingPool /></span>
            <span > Pool </span> 
          </button>
          <button className="reserveNameDis">
            <span className="poolIcon"><CgGym /></span>
            <span > Gym </span> 
          </button>
          <button className="reserveNameDis">
            <span className="poolIcon"><GiPartyPopper /></span>
            <span > Banquet Hall </span> 
          </button>
        </div>
        <div className="Calendar">
          
          <FullCalendar
            height={70} // sets height to height of resources.
            minTime={'06:00'} // start timeline at this time, must be in format '08:00'
            maxTime={'20:00'} // end timeline at this time, must be in format '18:00'
            slotDuration={'01:00:00'}
            defaultView="dayGridMonth"
            header={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={this.state.calendarEvents}
            navLinks={true} // can click day/week names to navigate views
            editable={true}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }
}
