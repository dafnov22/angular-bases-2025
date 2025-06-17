import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe],
  standalone: true,
})

export class HeroPageComponent {
  name = signal('IronMan')
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizedName = computed(() => this.name().toUpperCase());

  // getHeroDescription(): string {
  //   return `Hero: ${this.name()}, Age: ${this.age()}`;
  // }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }
  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('IronMan');
    this.age.set(45);
  }

















  // heroName = 'Superman';
  // heroPower = 'Flight';
  // heroSignal = signal({ name: 'Superman', power: 'Flight' });

  // changeHero() {
  //   this.heroName = 'Batman';
  //   this.heroPower = 'Stealth';
  //   this.heroSignal.set({ name: 'Batman', power: 'Stealth' });
  // }

  // resetHero() {
  //   this.heroName = 'Superman';
  //   this.heroPower = 'Flight';
  //   this.heroSignal.set({ name: 'Superman', power: 'Flight' });
  // }
}
