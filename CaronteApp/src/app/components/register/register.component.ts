import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CrudService} from '../../services/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  crearFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public _crudService: CrudService,  ) { }


  dataForm() {

    const DATA = {
        id: this.crearFormGroup.value.id,
        url: this.crearFormGroup.value.url,
        InfoDesaparecido: {
          nombre: this.crearFormGroup.value.nombre,
          apellido: this.crearFormGroup.value.apellido,
          edad: this.crearFormGroup.value.edad,
          direccion: this.crearFormGroup.value.direccion},
        InfoContacto: {
            nombre: this.crearFormGroup.value.nombre,
            apellido: this.crearFormGroup.value.apellido,
            ciudad: this.crearFormGroup.value.ciudad,
            direccion: this.crearFormGroup.value.direccion,
            pais: this.crearFormGroup.value.pais,
            telefono: this.crearFormGroup.value.telefono,
            provincia: this.crearFormGroup.value.provincia,
            email: this.crearFormGroup.value.email,
            codigozip: this.crearFormGroup.value.codigozip}
    };

    this._crudService.createUser(DATA).then(() => {
      console.log('Guardado con exito'); },
      (error) => {
        console.log('error');  });

  }


  ngOnInit() {

    this.crearFormGroup = this._formBuilder.group({
      nombreDesaparecido: ['', Validators.required]
    });
    this.crearFormGroup = this._formBuilder.group({
      apellidoDesaparecido: ['', Validators.required]
    });
    this.crearFormGroup = this._formBuilder.group({
      edadDesaparecido: ['', Validators.required]
    });
    this.crearFormGroup = this._formBuilder.group({
      direccionDesaparicion: ['', Validators.required]
    });

    // Información de contacto
    this.crearFormGroup = this._formBuilder.group({
      nombreContacto: ['', Validators.required]
    });
    this.crearFormGroup = this._formBuilder.group({
      apellidoContacto: ['', Validators.required]
    });
    this.crearFormGroup = this._formBuilder.group({
      ciudadContacto: ['', Validators.required]
    });
    this.crearFormGroup = this._formBuilder.group({
      direccionContacto: ['', Validators.required]
    });
    this.crearFormGroup = this._formBuilder.group({
      numeroContacto: ['', Validators.required]
    });
    this.crearFormGroup = this._formBuilder.group({
      emailContacto: ['', Validators.required]
    });
    this.crearFormGroup = this._formBuilder.group({
      zipContacto: ['', Validators.required]
    });
  }

}

