const MAX_HEALTH = 1000
const MIN_HEALTH = 0
const STARTING_LEVEL = 1


class Character {

  constructor() {
    this.health = MAX_HEALTH,
    this.level = STARTING_LEVEL
   }
  
  isAlive() {
    return this.health === MIN_HEALTH ? false : true
  }

  attack(target, damage) {
    if (this === target) return
    const levelDifference = this.level - target.level

    if (levelDifference >= 5) damage = damage * 2
    if (levelDifference <= -5) damage = damage / 2

    target.health = Math.max(target.health - damage, MIN_HEALTH)
  }

  heal(healPower) {
    this.health = Math.min(this.health + healPower, MAX_HEALTH)
  }

}

module.exports = {
  Character,
}