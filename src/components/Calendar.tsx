import * as React from "react";
// import EventCalendar from "./components/EventCalendar";
//import daygrid from "fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick


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
        { title: "Event Now", date: new Date() }
      ]
    };
  } 

  handleDateClick = (arg:any) => {
      alert(arg.dateStr)
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: "New Event",
          date: arg.dateStr,
          // allDay: arg.allDay
        })
      });
  };

  // handleDateClick = (e: any) => {
  //   alert(e.dateStr);
    
  //   // this.changeViewtoAgendaDay('gotoDate', e.dateStr);
  //   // FullCalendar.changeView('dayGridDay', e.dateStr)
  //   // this..changeView('dayGridDay', e.dateStr)
  // };

  render() {
    return (
      <div className="Calendar">
        <h1 className="reserveTypeTitle">Pool Reservations</h1>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          // weekends={false},
          
          events={[
            { title: "reserved", date: "2021-01-17" },
            { title: "reserved", date: "2021-01-15" }
          ]}
          dateClick={this.handleDateClick}
        />
      </div>
    );
  }
}
