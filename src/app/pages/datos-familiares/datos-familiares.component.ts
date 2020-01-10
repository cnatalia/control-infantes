import { Component, OnInit, AfterContentInit, AfterViewInit, Input, OnChanges } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

import * as $ from 'jquery';

import { Familiar } from '../../models/familiar.model';
declare var $: any;
@Component({
  selector: 'app-datos-familiares',
  templateUrl: './datos-familiares.component.html',
  styleUrls: ['./datos-familiares.component.scss']
})
export class DatosFamiliaresComponent implements OnInit, AfterViewInit, OnChanges {
  public form: FormGroup;
  public selectOptions;
  public familiares: number[] = [];
  public mismaDireccionTouch = false;
  @Input() account: Account;

  public arrayItems: {
    id: number;
    title: string;
  }[];

  constructor(private fb: FormBuilder) {
    // this.form = new FormGroup({
    //   nombreInfante: new FormControl(),
    //   nombreAcompanante1: new FormControl(),
    //   parentesco1: new FormControl(),
    //   edad1: new FormControl(),
    //   tipoDocumento: new FormControl(),
    //   numeroDocumento: new FormControl(),
    //   direccion: new FormControl(),
    //   celular: new FormControl(),
    //   ciudad: new FormControl(),
    //   direccionFamiliar: new FormControl(),
    //   mismaDireccion: new FormControl(),
    //   valorTotal: new FormControl(),
    //   adicionalKit: new FormControl(),
    //   adicionalMultipaseo: new FormControl(),
    //   adicionalCartagena: new FormControl(),
    //   valorCupo: new FormControl(),
    // });

    this.createForm();

  }

  createForm() {
    this.form = this.fb.group({
      'nombreInfante': '',
      'direccion': '',
      'ciudad': '',
      'familiaresArray': this.fb.array([])
    });
  }


  get direccion() { return this.form.get('direccion'); }
  get direccionFamiliar() { return this.form.get('direccionFamiliar'); }
  get mismaDireccion() { return this.form.get('mismaDireccion'); }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.form.reset({
      nombreInfante: this.account.nombreInfante,
      direccion: this.account.direccion,
      ciudad: this.account.ciudad
    });
    this.setStudents(this.account.familiares);
  }

  get familiaresArray(): FormArray {
    return this.form.get('familiaresArray') as FormArray;
  }

  setStudents(students: Familiar[]) {

    const studentsFA = this.fb.group(students);

    this.form.setControl('familiaresArray', studentsFA);
  }

  crearFamiliar() {
    this.familiaresArray.push(this.fb.group(new Familiar('', '', '', '', '', '', '', '', '', '', '', '', '', '')));
  }

  ngOnInit() {

    // this.mismaDireccion.valueChanges.subscribe(val => {
    //   this.mismaDireccionTouch = true;
    //   if (val === 'si') {
    //     this.direccionFamiliar.setValue(this.direccion.value);
    //     this.direccionFamiliar.updateValueAndValidity();
    //     this.direccionFamiliar.markAsDirty();
    //     this.direccionFamiliar.markAsTouched();
    //   } else {
    //     this.direccionFamiliar.setValue('');
    //   }
    // });
    this.arrayItems = [];
  }

  ngAfterViewInit() {
    $('.collapsible').collapsible();
  }

}

export class Account {
  public nombreInfante: '';
  public direccion: '';
  public ciudad: '';
  public familiares: Familiar[];
}
