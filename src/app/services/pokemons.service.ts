import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40')
      .pipe(
        map((response: any) => {
          return response.results.map((pokemon: { url: string; name: any }) => {
            const urlPartes = pokemon.url
              .split('/')
              .filter((part: string) => part !== '');
            const id = urlPartes[urlPartes.length - 1];
            return {
              id: parseInt(id),
              name: pokemon.name,
              base_experience: 0,
              height: 0,
              order: 0,
              weight: 0,
              type: [''],
              url: '',
            };
          });
        })
      );
  }

  getPokemonById(id: string): Observable<Pokemon> {
    return this.http
      .get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + id)
      .pipe(
        map((pokemon: any) => {
          let types: string[] = [];
          pokemon.types.forEach((res: any) => {
            let t: string = res.type.name;
            types.push(t);
          });

          return {
            id: pokemon.id,
            name: pokemon.name,
            base_experience: pokemon.base_experience,
            height: pokemon.height,
            order: pokemon.order,
            weight: pokemon.weight,
            type: types,
            url: pokemon.sprites.other.dream_world.front_default,
          };
        })
      );
  }
}
