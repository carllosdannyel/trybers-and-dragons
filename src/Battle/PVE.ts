import Fighter, { SimpleFighter } from '../Fighter';

import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monster: (Fighter | SimpleFighter)[];

  constructor(player: Fighter, monster: (Fighter | SimpleFighter)[]) {
    super(player);
    this._player = player;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((monster) => {
      while (this._player.lifePoints > 0 && monster.lifePoints > 0) {
        this._player.attack(monster);
        monster.attack(this._player);
      }
    });
    
    return super.fight();
  }
}