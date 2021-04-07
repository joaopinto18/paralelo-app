import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';

@Component({
  selector: 'app-vista-maneja-citas',
  templateUrl: './vista-maneja-citas.component.html',
  styleUrls: ['./vista-maneja-citas.component.scss']
})
export class VistaManejaCitasComponent implements OnInit {
  arr:Array<any>=[]
  arri:Array<any>=[]
  ArrayEventos:Array<any>=[]
  constructor(private addCarService: AddCarServiceService) { }

  async ngOnInit(): Promise<void> {

    await this.addCarService.obtenerFechaCitas(this.arr).then(async arr1=>{
      await this.addCarService.obtenerHoraCitas(this.arri).then(arr2=>{
        
      
      for (let index = 0; index < arr1.length; index++) {
        
        this.ArrayEventos.push({
          title: 'cita'+" "+arr2[index],
          date: arr1[index],
        });
        
      }
    })
    })

  this.calendarOptions.events = this.ArrayEventos;
  console.log(this.calendarOptions.events);

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
    nextDayThreshold: "00:00:00",
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  
  
}
