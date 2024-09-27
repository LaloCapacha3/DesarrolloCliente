import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../types/user';

@Component({
  selector: 'app-detalle-usuarios',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './detalle-usuarios.component.html',
  styleUrl: './detalle-usuarios.component.scss'
})

export class DetalleUsuariosComponent {
  @Input() user: User | null = null;
  @Output() clearUser = new EventEmitter<void>();

  onClear(): void {
    this.clearUser.emit();
  }
}