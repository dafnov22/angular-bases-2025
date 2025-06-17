import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
  standalone: true,
})
export class CharacterAddComponent {
  name = signal<string>('');
  power = signal<number>(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      console.error('Name and power must be provided');
      return;
    }

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: Math.floor(Math.random() * 1000), // Random ID for simplicity
      name: this.name(),
      power: this.power(),
    };
    // this.characters.update((chars) => [...chars, newCharacter]);
    this.newCharacter.emit(newCharacter); // Emit the new character
    this.resetFields();
  }

  resetFields() {
    this.name.set(''); // Clear the input field after adding
    this.power.set(0); // Reset power to default value
  }
}
