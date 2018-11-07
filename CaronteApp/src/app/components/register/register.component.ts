import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CrudService} from '../../services/crud.service';
import { log } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  crearFormGroup: FormGroup;

  paises: string[] = ['Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Ecuador',
    'El Salvador', 'Guatemala', 'Honduras', 'México', 'Nicaragua', 'Panamá', 'Paraguay', 'Puerto Rico', 'Perú',
    'Uruguay', 'Venezuela'];

  constructor(private _formBuilder: FormBuilder, public _crudService: CrudService,  ) { }

  dataForm() {

    const dataShared = this._crudService.getData();

    console.error('Formulario', dataShared);

    const DATA = {
        url_foto: dataShared.urlImg,
        info_desaparecido: {
          nombre: this.crearFormGroup.value.nombreDesaparecido,
          apellido: this.crearFormGroup.value.apellidoDesaparecido,
          edad: this.crearFormGroup.value.edadDesaparecido,
          direccion: this.crearFormGroup.value.ciudadDesaparicion,
          pais: this.crearFormGroup.value.paisDesaparicion},
        info_contacto: {
            nombre: this.crearFormGroup.value.nombreContacto,
            apellido: this.crearFormGroup.value.apellidoContacto,
            ciudad: this.crearFormGroup.value.direccionContacto,
            direccion: this.crearFormGroup.value.ciudadContacto,
            pais: this.crearFormGroup.value.paisContacto,
            codigo_postal: this.crearFormGroup.value.zipContacto,
            telefono: this.crearFormGroup.value.numeroContacto,
            email: this.crearFormGroup.value.emailContacto},
        data_api: dataShared.dataApi
    };

    console.log(DATA);

    this._crudService.createUser(DATA).then(() => {
      console.log('Guardado con exito'); },
      (error) => {
        console.log(error);  });
  }


  ngOnInit() {

    this.crearFormGroup = this._formBuilder.group({
      // Información desaparecido
      nombreDesaparecido: ['', Validators.required],
      apellidoDesaparecido: ['', Validators.required],
      edadDesaparecido: ['', Validators.required],
      ciudadDesaparicion: ['', Validators.required],
      paisDesaparicion: ['', Validators.required],

      // Información de contacto
      nombreContacto: ['', Validators.required],
      apellidoContacto: ['', Validators.required],
      direccionContacto: ['', Validators.required],
      ciudadContacto: ['', Validators.required],
      paisContacto: ['', Validators.required],
      zipContacto: ['', Validators.required],
      numeroContacto: ['', Validators.required],
      emailContacto: ['', Validators]
    });
  }

}

