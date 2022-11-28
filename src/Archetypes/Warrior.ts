import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    Warrior.incrementInstances();
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

export default Warrior;