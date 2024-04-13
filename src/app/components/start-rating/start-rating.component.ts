import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-start-rating',
  standalone: true,
  imports: [
    MatIconModule,
    NgFor
  ],
  templateUrl: './start-rating.component.html',
  styleUrl: './start-rating.component.scss'
})
export class StartRatingComponent implements OnInit {
  @Input() disbaled?: boolean = false;
  @Input() rating: number = 0;
  @Input() starCount: number = 0;
  ratingCount?: number[] = [];
  
  ngOnInit(): void {
    Array.from({ length: 5 }).forEach((star, index) => {
      this.ratingCount?.push(index + 1)
    })
  }

  showIcon(index: number) {
    return this.starCount >= index
  }
}
