const MAX_HEALTH = 1000
const MIN_HEALTH = 0
const STARTING_LEVEL = 1

function createCharacter() {
  return {
    health: MAX_HEALTH,
    level: STARTING_LEVEL,
    attack: attack,
    heal: heal
  }
}

function isAlive(character) {
  return character.health === MIN_HEALTH ? false : true
}

function attack(character, damage) {
  character.health = Math.max(character.health - damage, MIN_HEALTH)
}

function heal(character, healPower) {
  character.health = Math.min(character.health + healPower, MAX_HEALTH)
}

module.exports = {
  createCharacter,
  isAlive,
}