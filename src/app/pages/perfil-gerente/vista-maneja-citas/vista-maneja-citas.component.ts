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
    events: [
      { title: 'Cita: Ana', date: '2021-04-04' },
      { title: 'Cita: Peter', date: '2021-04-05' },
    ],
    eventColor: 'rgb(255, 201, 51);',
    titleFormat: { // will produce something like "Tuesday, September 18, 2018"
    month: 'long',
    year: 'numeric',
    day: '2-digit',
    },
    handleWindowResize: true,
    expandRows: true,
    //height: 300,
    //contentHeight: "auto",
    buttonText: {
      today:    'today',
      month:    'month',
      week:     'week',
      day:      'day',
      list:     'list'
    },
    //aspectRatio: 1.8,
    eventClick: function(info) {
      alert(info.event.title);
      // change the border color just for fun
      //info.el.style.borderColor = 'red';
    },
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  
}
