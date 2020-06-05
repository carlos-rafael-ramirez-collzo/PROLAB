import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hemoquimica',
  templateUrl: './hemoquimica.page.html',
  styleUrls: ['./hemoquimica.page.scss'],
})
export class HemoquimicaPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';

  constructor( private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getAlbumes()
      .subscribe( albumes => {
        console.log( albumes );
        this.albumes = albumes;
      });
  }

  buscar( event ) {
    this.textoBuscar = event.detail.value;
  }

}
