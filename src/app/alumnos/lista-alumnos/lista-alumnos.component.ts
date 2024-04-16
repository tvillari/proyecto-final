import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

export interface Alumno {
  id: number;
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.css',
})
export class ListaAlumnosComponent {
  displayedColumns: string[] = ['id', 'nombre', 'edad'];
  dataSource = new MatTableDataSource<Alumno>([
    { id: 1, nombre: 'Juan', edad: 20 },
    { id: 2, nombre: 'María', edad: 22 },
    { id: 3, nombre: 'Pedro', edad: 21 },
  ]);
}
