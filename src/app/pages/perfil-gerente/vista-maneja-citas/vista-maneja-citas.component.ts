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
      { title: 'Cita: Ana/ hora: 2:00pm', date: '2021-04-04' },
      { title: 'event 2', date: '2019-04-02' }
    ],
    eventColor: '#378006',
    titleFormat: { // will produce something like "Tuesday, September 18, 2018"
    month: 'long',
    year: 'numeric',
    day: '2-digit',
    },
    handleWindowResize: true,
    buttonText: {
      today:    'today',
      month:    'month',
      week:     'week',
      day:      'day',
      list:     'list'
    },
    height: 300
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}
