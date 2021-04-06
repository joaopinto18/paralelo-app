import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-vista-maneja-citas',
  templateUrl: './vista-maneja-citas.component.html',
  styleUrls: ['./vista-maneja-citas.component.scss']
})
export class VistaManejaCitasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    eventClick: function(info){
      alert(info.event.title)
    },
    contentHeight: 4000,
    aspectRatio: 1.8,
    handleWindowResize:true,
    titleFormat:{ year: 'numeric', month: 'long', day: 'numeric' },
    eventColor: "rgb(255, 201, 51)",
    eventDisplay: "auto",
    editable: false,
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  
}
