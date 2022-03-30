function createCharacter() {
    return {
      health: 1000,
      level: 1,
      attack: (character, damage) => character['health'] -= damage,
    }
  }
  
  function isAlive(character) {
    return character.health === 0 ? false : true
  }
  
  module.exports = {
    createCharacter,
    isAlive,
  }
  