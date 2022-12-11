import Race from './Race';

class Dwarf extends Race {
  private static _instances = 0;

  constructor(
    name: string, 
    dexterity: number,
    private _maxLifePoints: number = 80,
  ) {
    super(name, dexterity);
    Dwarf.incrementInstances();
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

export default Dwarf;
