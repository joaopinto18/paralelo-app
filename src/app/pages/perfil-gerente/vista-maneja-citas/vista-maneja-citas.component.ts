import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';

@Component({
  selector: 'app-vista-maneja-citas',
  templateUrl: './vista-maneja-citas.component.html',
  styleUrls: ['./vista-maneja-citas.component.scss']
})
export class VistaManejaCitasComponent implements OnInit {

  private op: any;
  private arr: Array<string>=[]
  private calendarevent: Array<any>=[];
  
  constructor(private addCarService: AddCarServiceService) { }

  async ngOnInit(): Promise<void> {
    const array=this.addCarService.obtenerFechaCitas().then((querySnapshot) => {
      querySnapshot.forEach(async (doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.calendarevent.push(await doc.get('placa'))
          console.log(await this.calendarevent[0]);
          console.log(await this.calendarevent[1]);
          console.log(await this.calendarevent[2]);
      });
    })
  }
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events:  [],
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
