const { createCharacter, isAlive } = require('./RPG')

it('should can create character', () => {
    const character = createCharacter()

    expect(character['health']).toBe(1000)
    expect(character['level']).toBe(1)
})

it('should one character attack another one', () => {
    const characterOne = createCharacter()
    const characterTwo = createCharacter()

    characterOne.attack(characterTwo, 50)

    expect(characterTwo['health']).toBe(950)
})

it('should one character heal another one', () => {
    const characterOne = createCharacter()
    const characterTwo = createCharacter()
    characterTwo['health'] = 500

    characterOne.heal(characterTwo, 50)

    expect(characterTwo['health']).toBe(550)
})

it('should one character heal another one to a maximum', () => {
    const characterOne = createCharacter()
    const characterTwo = createCharacter()
    characterTwo['health'] = 500

    characterOne.heal(characterTwo, 550)

    expect(characterTwo['health']).toBe(1000)
})

describe('character status', () => {
    it('should check if character is alive', () => {
        const character = createCharacter()
        const cadaver = createCharacter()
        cadaver['health'] = 0

        expect(isAlive(character)).toBeTruthy()
        expect(isAlive(cadaver)).toBeFalsy()
    })

    it('should check if character is dead', () => {
        const characterOne = createCharacter()
        const characterTwo = createCharacter()

        characterOne.attack(characterTwo, 1000)

        expect(isAlive(characterTwo)).toBeFalsy()
    })
})