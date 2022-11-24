import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.incrementInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static incrementInstances(): void {
    this._instances += 1;
  }

  static createdRacesInstances(): number {
    return this._instances;
  }
}

export default Halfling;