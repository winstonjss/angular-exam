import { Component } from '@angular/core';
import { JugadorSerivce, Jugador} from '../../../servicio/futbol_jh_ye.service';

@Component({
  selector: 'app-messi',
  templateUrl: './messi.component.html',
  styleUrls: ['./messi.component.css']
})
export class MessiComponent {

  jugador:Jugador[]=[];
  constructor (private _jugadorService:JugadorSerivce){    
  }
  ngOnInit(): void{
    this.jugador=this._jugadorService.getJugadores();
    console.log(this.jugador);
  }
}
