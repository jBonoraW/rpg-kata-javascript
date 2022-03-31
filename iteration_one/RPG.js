function createCharacter() {
  return {
    health: 1000,
    level: 1,
    attack: attack,
    heal: heal
  }
}

function isAlive(character) {
  return character.health === 0 ? false : true
}

function attack(character, damage) {
  character['health'] = Math.max(character['health'] - damage, 0)
}

function heal(character, healPower) {
  character['health'] = Math.min(character['health'] + healPower, 1000)
}

module.exports = {
  createCharacter,
  isAlive,
}