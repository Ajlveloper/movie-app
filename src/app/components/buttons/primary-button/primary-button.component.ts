import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() isFontLarge:boolean = false;
  @Input() isOnlyIcon:boolean = false;
  @Input() class?:string;
  @Output() handleClickEmitter = new EventEmitter();


  handleClick() {
    this.handleClickEmitter.emit();
  }
}
