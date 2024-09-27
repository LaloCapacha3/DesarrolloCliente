import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../types/user';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss'
})

export class ListaUsuariosComponent implements OnInit {
  users: User[] = [];
  selectedUserId: number | null = null;

  @Output() userSelected = new EventEmitter<User>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  selectUser(user: User): void {
    this.selectedUserId = user.id;
    this.userSelected.emit(user);
  }

  clearSelection(): void {
    this.selectedUserId = null;
  }
}