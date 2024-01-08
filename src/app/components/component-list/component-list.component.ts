import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
})
export class ComponentListComponent {
  loading = true;
  pokemons: Pokemon[] = [];
  viewType: FormControl;
  constructor(private pokemonService: PokemonsService) {
    this.viewType = new FormControl('table');
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((pokemons: any) => {
      this.pokemons = pokemons;
      this.loading = false;
    });
  }
}
