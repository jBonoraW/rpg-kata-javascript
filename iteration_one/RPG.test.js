const {Character} = require('./RPG')

it('should can create character', () => {
  const character = new Character()

  expect(character.health).toBe(1000)
  expect(character.level).toBe(1)
})

it('should check if character is alive', () => {
  const character = new Character()

  expect(character.isAlive()).toBeTruthy()
})

it('should one character attack another one', () => {
  const characterOne = new Character()
  const characterTwo = new Character()

  characterOne.attack(characterTwo, 50)

  expect(characterTwo.health).toBe(950)
})

it('should a character cannot damage itself', () => {
  const character = new Character()

  character.attack(character, 50)

  expect(character.health).toBe(1000)
})

it('should check if character can kill other character', () => {
  const characterOne = new Character()
  const characterTwo = new Character()

  characterOne.attack(characterTwo, 1001)

  expect(characterTwo.isAlive()).toBeFalsy()
  expect(characterTwo.health).toBe(0)
})

it('should a character only heal itself', () => {
    const characterOne = new Character()
    characterOne.health = 950
  
    characterOne.heal(50)
  
    expect(characterOne.health).toBe(1000)
  })

it('should a character cannot heal if they are dead', () => {
    const characterOne = new Character()
    characterOne.health = 0

    characterOne.heal(50)

    expect(characterTwo.isAlive()).toBeFalsy()
})

it('should one character heal itself to a maximum', () => {
  const characterOne = new Character()
  characterOne.health = 500

  characterOne.heal(550)

  expect(characterOne.health).toBe(1000)
})

it('should deal half damage if target is 5 or more levels above the attacker', () => {
  const characterOne = new Character()
  const characterTwo = new Character()
  characterOne.level = 6

  characterTwo.attack(characterOne, 3)

  expect(characterOne.health).toBe(998.5)
})

it('should deal double damage if target is 5 or more levels below the attacker', () => {
  let characterOne = new Character()
  const characterTwo = new Character()
  characterOne.level = 6

  characterOne.attack(characterTwo, 3)

  expect(characterTwo.health).toBe(994)
})