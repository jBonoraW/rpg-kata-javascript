const { createCharacter, isAlive } = require('./RPG')

it('should can create character', () => {
    const character = createCharacter()

    expect(character.health).toBe(1000)
    expect(character.level).toBe(1)
})

it('should check if character is alive', () => {
    const character = createCharacter()

    expect(isAlive(character)).toBeTruthy()
})

it('should one character attack another one', () => {
    const characterOne = createCharacter()
    const characterTwo = createCharacter()

    characterOne.attack(characterTwo, 50)

    expect(characterTwo.health).toBe(950)
})

it('should a character cannot damage itself', () => {
    const character = createCharacter()

    character.attack(character, 50)

    expect(character.health).toBe(1000)
})

it('should a character only heal itself', () => {
    const characterOne = createCharacter()
    const characterTwo = createCharacter()
    characterOne.health = 950
    characterTwo.health = 950

    characterOne.heal(characterTwo, 50)
    characterOne.heal(characterOne, 50)

    expect(characterTwo.health).toBe(950)
    expect(characterOne.health).toBe(1000)
})

it('should check if character can kill other character', () => {
    const characterOne = createCharacter()
    const characterTwo = createCharacter()

    characterOne.attack(characterTwo, 1001)

    expect(isAlive(characterTwo)).toBeFalsy()
    expect(characterTwo.health).toBe(0)
})

it('should one character heal another one to a maximum', () => {
    const characterOne = createCharacter()
    characterOne.health = 500

    characterOne.heal(characterOne, 550)

    expect(characterOne.health).toBe(1000)
})
