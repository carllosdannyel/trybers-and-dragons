import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    Warrior._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
