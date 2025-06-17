import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  name = signal<string>('');
  power = signal<number>(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8500 },
    // { id: 3, name: 'Gohan', power: 7000 },
    // { id: 4, name: 'Piccolo', power: 6000 },
    // { id: 5, name: 'Frieza', power: 12000 },
    // { id: 6, name: 'Cell', power: 11000 },
    // { id: 7, name: 'Majin Buu', power: 13000 },
    // { id: 8, name: 'Trunks', power: 8000 },
    // { id: 9, name: 'Bulma', power: 1000 },
    // { id: 10, name: 'Krillin', power: 5000 },
  ]);

  powerClass = computed(() => {
    return {
      'text-danger': (character: Character) => character.power > 9000,
      'text-success': (character: Character) => character.power <= 9000,
    };
  });

  addCharacter() {
    console.log('name:', this.name());
    console.log('power:', this.power());

    if (!this.name() || !this.power() || this.power() <= 0) {
      console.error('Name and power must be provided');
      return;
    }
    // const newId = this.characters().length + 1;
    // const newCharacter: Character = {
    //   id: newId,
    //   name: `New Character ${newId}`,
    //   power: Math.floor(Math.random() * 10000) + 1,
    // };
    // this.characters.update((chars) => [...chars, newCharacter]);
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((chars) => [...chars, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set(''); // Clear the input field after adding
    this.power.set(0); // Reset power to default value
  }
}
