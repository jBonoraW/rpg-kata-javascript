const MAX_HEALTH = 1000
const MIN_HEALTH = 0
const STARTING_LEVEL = 1
let lastCharacterId = 0

function createCharacter() {
  const characterId = lastCharacterId + 1
  lastCharacterId = characterId
  return {
    id: lastCharacterId,
    health: MAX_HEALTH,
    level: STARTING_LEVEL,
    attack: (...args) => attack(...args, characterId),
    heal: (...args) => heal(...args, characterId),
  }
}

function isAlive(character) {
  return character.health === MIN_HEALTH ? false : true
}

function attack(target, damage, id) {
  if (id === target.id) return
  target.health = Math.max(target.health - damage, MIN_HEALTH)
}

function heal(target, healPower, id) {
  if (id !== target.id) return
  target.health = Math.min(target.health + healPower, MAX_HEALTH)
}

module.exports = {
  createCharacter,
  isAlive,
}