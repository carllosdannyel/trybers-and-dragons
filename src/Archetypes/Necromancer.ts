import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.incrementInstances();
  }

  static incrementInstances(): void {
    this._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;