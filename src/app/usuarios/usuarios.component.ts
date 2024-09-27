import { Component } from '@angular/core';
import { User } from '../types/user';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalleUsuariosComponent } from './detalle-usuarios/detalle-usuarios.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [ListaUsuariosComponent, DetalleUsuariosComponent, RouterOutlet],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})

export class UsuariosComponent {
  selectedUser: User | null = null;

  onUserSelected(user: User): void {
    this.selectedUser = user;
  }

  onClearUser(): void {
    this.selectedUser = null;
  }
}