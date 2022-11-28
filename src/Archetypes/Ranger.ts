import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    Ranger.incrementInstances();
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

export default Ranger;