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

toast.configure();


interface LogProps {}

interface LogStates {
  // handleDateClick: () => void;
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
      ]
    };
  } 

  handleDateClick = (arg: any) => {
    console.log(arg.dateStr);
    // FullCalendar.changeView = "dayGridDay";
    if (
      window.confirm("Please, confirm your Reservation:\n" + arg.date + " ?")
    ) {
      //fetch data here!
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: "Pool Reservation",
          //date: arg.dateStr
          start: arg.dateStr,
          end: arg.datStr
          // allDay: false
        })
      });
      toast('Your reservation was made. Enjoy!')
    }
  };

  // handleDateClick = (e: any) => {
  //   alert(e.dateStr);
    
  //   // this.changeViewtoAgendaDay('gotoDate', e.dateStr);
  //   // FullCalendar.changeView('dayGridDay', e.dateStr)
  //   // this..changeView('dayGridDay', e.dateStr)
  // };

  render() {
    return (
      <div>
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
