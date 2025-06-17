import { Component, computed, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  standalone: true,
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();

  // powerClass = computed(() => {
  //   return {
  //     'text-danger': (character: Character) => character.power > 9000,
  //     'text-success': (character: Character) => character.power <= 9000,
  //   };
  // });
}
