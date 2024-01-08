import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
})
export class ComponentDetailComponent {
  loading = true;
  pokemon: Pokemon = {
    id: 0,
    name: '',
    base_experience: 0,
    height: 0,
    order: 0,
    weight: 0,
    type: [''],
    url: '',
  };
  panelState: boolean;
  constructor(
    private pokemonService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.panelState = false;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.pokemonService.getPokemonById(id).subscribe((pokemon: any) => {
      console.log(pokemon);
      if (!pokemon) {
        return this.router.navigateByUrl('/');
      }
      this.pokemon = pokemon;
      this.loading = false;
      return '';
    });
  }
}
