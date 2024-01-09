import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item: Pokemon = {
    id: 0,
    name: '',
    base_experience: 0,
    height: 0,
    order: 0,
    weight: 0,
    type: [''],
    ability:[''],
    hidden_ability:[''],
    url_imatge: '',
    url_icon: ''
  };
  ngOnInit(): void {}
}
