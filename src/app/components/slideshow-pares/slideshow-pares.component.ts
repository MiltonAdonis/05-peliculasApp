import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarmas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freemode: true,
    spaceBetween: -10
  }

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

  onClick() {
    this.cargarmas.emit();
  }

  async verDetalle( id: string ) {
    
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
