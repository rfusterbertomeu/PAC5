import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() items: Pokemon[] = [
    {
      id: 0,
      name: '',
      base_experience: 0,
      height: 0,
      order: 0,
      weight: 0,
      type: '',
      url: '',
    },
  ];
  ngOnInit(): void {}
}
