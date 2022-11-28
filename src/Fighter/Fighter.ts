import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void; 
  receiveDamage(attackPoints: number): number; 
  energy?: Energy;
  levelUp(): void;
}

export default Fighter;