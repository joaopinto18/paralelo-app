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
